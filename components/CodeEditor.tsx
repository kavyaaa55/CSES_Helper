import { useEffect, useState } from "react";

const LANGUAGE_EXTENSIONS: Record<string, string> = {
  Assembly: "asm",
  C: "c",
  "C++": "cpp",
  Haskell: "hs",
  Java: "java",
  "Node.js": "js",
  Pascal: "pas",
  Python2: "py",
  Python3: "py",
  Ruby: "rb",
  Rust: "rs",
  Scala: "scala",
};

function injectCodeIntoFileInput(code: string) {
  const fileInput = document.querySelector<HTMLInputElement>('input[type="file"]');
  if (!fileInput) return;

  if (!code.trim()) {
    fileInput.value = "";
    return;
  }

  const langSelect = document.getElementById("lang") as HTMLSelectElement | null;
  const langName = langSelect?.value || "";
  const ext = LANGUAGE_EXTENSIONS[langName] ?? "txt";

  const file = new File([new Blob([code], { type: "text/plain" })], `solution.${ext}`, {
    type: "text/plain",
  });
  const dt = new DataTransfer();
  dt.items.add(file);
  fileInput.files = dt.files;

  if (typeof (window as Window & { check?: (i: HTMLInputElement) => void }).check === "function") {
    (window as Window & { check?: (i: HTMLInputElement) => void }).check!(fileInput);
  }
}

export default function CodeEditor() {
  const [code, setCode] = useState("");

  // Read language options from the existing CSES #lang select
  const [languages, setLanguages] = useState<string[]>([]);
  const [selectedLang, setSelectedLang] = useState("");

  const isDark = getComputedStyle(document.body).backgroundColor !== "rgb(255, 255, 255)";

  useEffect(() => {
    const langEl = document.getElementById("lang") as HTMLSelectElement | null;
    if (!langEl) return;

    const readOptions = () => {
      const opts = Array.from(langEl.options)
        .map((o) => o.value)
        .filter(Boolean);
      setLanguages(opts);
      setSelectedLang(langEl.value || opts[0] || "");
    };

    readOptions();

    // Keep in sync if CSES changes the select (e.g. on file upload)
    langEl.addEventListener("change", readOptions);
    return () => langEl.removeEventListener("change", readOptions);
  }, []);

  const handleLangChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setSelectedLang(val);
    // Mirror back to CSES's own select so the form submits correctly
    const langEl = document.getElementById("lang") as HTMLSelectElement | null;
    if (langEl) {
      langEl.value = val;
      langEl.dispatchEvent(new Event("change"));
    }
    // Re-inject with new extension if code already present
    if (code.trim()) injectCodeIntoFileInput(code);
  };

  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setCode(val);
    injectCodeIntoFileInput(val);
  };

  const selectStyle: React.CSSProperties = {
    padding: "4px 8px",
    fontSize: "13px",
    backgroundColor: isDark ? "#2d2d2d" : "#fff",
    color: isDark ? "#d4d4d4" : "#000",
    border: isDark ? "1px solid #555" : "1px solid #ccc",
    borderRadius: "4px",
    cursor: "pointer",
  };

  return (
    <div style={{ margin: "8px 0 12px 0" }}>
      {/* Language selector above the textarea */}
      {languages.length > 0 && (
        <div style={{ marginBottom: "6px", display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ fontSize: "13px", color: isDark ? "#aaa" : "#555" }}>Language:</span>
          <select value={selectedLang} onChange={handleLangChange} style={selectStyle}>
            {languages.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
        </div>
      )}

      <textarea
        style={{
          width: "100%",
          height: "400px",
          fontFamily: "monospace",
          fontSize: "13px",
          backgroundColor: isDark ? "#1e1e1e" : "#ffffff",
          color: isDark ? "#d4d4d4" : "#000000",
          border: isDark ? "1px solid #555" : "1px solid #ccc",
          padding: "10px",
          borderRadius: "4px",
          resize: "vertical",
          boxSizing: "border-box",
        }}
        value={code}
        onChange={handleCodeChange}
        placeholder="Paste your code here..."
        spellCheck={false}
      />
    </div>
  );
}
