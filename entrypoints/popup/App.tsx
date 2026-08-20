import "./App.css";
import { useEffect, useState } from "react";

interface Settings {
  hints: boolean;
  tags: boolean;
  resources: boolean;
  solutions: boolean;
}

/**
 * Main popup component for the CSES ToolKit extension.
 * Allows toggling display of hints, topic tags, and solutions
 * on CSES problem pages. Settings are persisted via chrome.storage.sync
 * and broadcast to the active tab's content script.
 */
export default function App() {
  const [settings, setSettings] = useState<Settings>({
    hints: true,
    tags: true,
    resources: true,
    solutions: true,
  });

  // Load settings from chrome storage on mount
  useEffect(() => {
    (async () => {
      const result = await browser.storage.sync.get("cses_settings");
      if (result.cses_settings) {
        setSettings(result.cses_settings as Settings);
      }
    })();
  }, []);

  // Toggle a setting, persist it, and notify the active tab
  const handleToggle = async (key: keyof Settings) => {
    const newSettings: Settings = { ...settings, [key]: !settings[key] };
    setSettings(newSettings);

    // Persist to storage
    await browser.storage.sync.set({ cses_settings: newSettings });

    // Notify the content script on the active tab
    const tabs = await browser.tabs.query({ active: true, currentWindow: true });
    if (tabs[0]?.id) {
      browser.tabs.sendMessage(tabs[0].id, {
        type: "SETTINGS_UPDATED",
        settings: newSettings,
      });
    }
  };

  return (
    <div
      style={{
        width: "300px",
        padding: "16px",
        fontFamily: "system-ui, -apple-system, sans-serif",
        boxSizing: "border-box",
      }}
    >
      <h2 style={{ margin: "0 0 8px 0", fontSize: "18px" }}>CSES ToolKit</h2>

      <p style={{ margin: "0 0 12px 0", fontSize: "13px", color: "#666" }}>
        Instantly view hints and topic tags for CSES problems directly on the
        problem page.
      </p>

      <div style={{ marginBottom: "12px" }}>
        <h3
          style={{ fontSize: "13px", fontWeight: "600", margin: "0 0 8px 0" }}
        >
          Display Settings
        </h3>

        <ToggleItem
          label="Show Hints"
          checked={settings.hints}
          onChange={() => handleToggle("hints")}
        />
        <ToggleItem
          label="Show Topic Tags"
          checked={settings.tags}
          onChange={() => handleToggle("tags")}
        />
        <ToggleItem
          label="Show Solutions"
          checked={settings.solutions}
          onChange={() => handleToggle("solutions")}
        />
        {/* Resources toggle hidden from UI — feature kept intact */}
      </div>

      <p style={{ fontSize: "11px", color: "#888", margin: "0 0 4px 0" }}>
        Open any problem on cses.fi to get started.
      </p>

      <p style={{ fontSize: "11px", color: "#888", margin: "0 0 4px 0" }}>
        To publish your solutions go to your accepted solutions page and submit it.
      </p>

      <p style={{ fontSize: "11px", color: "#888", margin: 0, display: "flex", alignItems: "center", gap: "4px" }}>
        Made by{" "}
        <a
          href="https://github.com/kavyaaa55"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#888", textDecoration: "none", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "3px" }}
        >
          kavyaaa55
          <svg
            height="13"
            width="13"
            viewBox="0 0 16 16"
            fill="#888"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.5 7.5 0 012.01-.27c.68 0 1.36.09 2.01.27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z" />
          </svg>
        </a>
      </p>
    </div>
  );
}

interface ToggleItemProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

/**
 * A single toggle row used in the settings panel.
 */
function ToggleItem({ label, checked, onChange }: ToggleItemProps) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "8px 0",
        borderBottom: "1px solid #eee",
      }}
    >
      <span style={{ fontSize: "14px" }}>{label}</span>
      <label
        style={{
          position: "relative",
          display: "inline-block",
          width: "44px",
          height: "24px",
        }}
      >
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          style={{ opacity: 0, width: 0, height: 0 }}
        />
        <span
          style={{
            position: "absolute",
            cursor: "pointer",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: checked ? "#4CAF50" : "#ccc",
            borderRadius: "24px",
          }}
        >
          <span
            style={{
              position: "absolute",
              content: "",
              height: "18px",
              width: "18px",
              left: checked ? "23px" : "3px",
              bottom: "3px",
              backgroundColor: "white",
              borderRadius: "50%",
            }}
          />
        </span>
      </label>
    </div>
  );
}
