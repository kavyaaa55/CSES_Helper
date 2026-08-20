import { useState } from "react";

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

  const isDark = getComputedStyle(document.body).backgroundColor !== "rgb(255, 255, 255)";

  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setCode(val);
    injectCodeIntoFileInput(val);
  };

  return (
    <div style={{ margin: "4px 0 12px 0" }}>
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
