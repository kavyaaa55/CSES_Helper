import { useState } from "react";
import HINTS from "../../data/hints.ts";
import PROBLEM_TOPICS from "../../data/topics.ts";
import PROBLEM_RESOURCES from "../../data/resources.ts";

type Props = {
  problemId: string;
};

export default function App({ problemId }: Props) {
  const hints: string[] = HINTS[problemId as keyof typeof HINTS] || [];
  const topics: string[] = PROBLEM_TOPICS[problemId as keyof typeof PROBLEM_TOPICS] || [];
  const resources: { link: string; linkname: string }[] =
    PROBLEM_RESOURCES[problemId as keyof typeof PROBLEM_RESOURCES] || [];

  const [openHints, setOpenHints] = useState<Record<string | number, boolean>>({});

  const toggleHint = (key: string | number) => {
    setOpenHints((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  if (!hints || hints.length === 0) return null;

  // Split hints into 3 parts (or fewer if not enough hints)
  const hint1 = hints[0] || "";
  const hint2 = hints[1] || "";
  const hint3 = hints[2] || "";

  // ... (imports and logic same)

  return (
    <div style={containerStyle}>
      {/* Hints */}
      {hints.map((hint, index) => (
        <div key={index} style={hintBlockStyle}>
          <div style={hintHeaderStyle} onClick={() => toggleHint(index)}>
            <span style={arrowStyle}>{openHints[index] ? "▼" : "▶"}</span>
            <span>Hint {index + 1}</span>
          </div>
          {openHints[index] && (
            <div style={hintContentGrey}>{hint}</div>
          )}
        </div>
      ))}

      {/* Topics */}
      <div style={hintBlockStyle}>
        <div style={hintHeaderStyle} onClick={() => toggleHint("topics")}>
          <span style={arrowStyle}>{openHints["topics"] ? "▼" : "▶"}</span>
          <span>Topics</span>
        </div>
        {openHints["topics"] && (
          <div style={hintContentBlue}>
            {topics.length > 0 ? (
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {topics.map((topic, i) => (
                  <span key={i} style={topicTagStyle}>{topic}</span>
                ))}
              </div>
            ) : (
              <em style={{ color: "#888" }}>No topics available.</em>
            )}
          </div>
        )}
      </div>

      {/* Resources */}
      <div style={hintBlockStyle}>
        <div style={hintHeaderStyle} onClick={() => toggleHint("resources")}>
          <span style={arrowStyle}>{openHints["resources"] ? "▼" : "▶"}</span>
          <span>Resources</span>
        </div>
        {openHints["resources"] && (
          <div style={hintContentGrey}>
            {resources.length > 0 ? (
              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                {resources.map((res, i) => (
                  <a key={i} href={res.link} target="_blank" rel="noopener noreferrer" style={resourceLinkStyle}>
                    <em>{res.linkname}</em>
                  </a>
                ))}
              </div>
            ) : (
              <em style={{ color: "#888" }}>No resources available.</em>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// --- STYLES ---

const containerStyle: React.CSSProperties = {
  margin: "10px 0",
};

const hintBlockStyle: React.CSSProperties = {
  margin: "0",
};

const hintHeaderStyle: React.CSSProperties = {
  padding: "6px 0",
  color: "#5cafff;", // CSES Link Blue
  cursor: "pointer",
  userSelect: "none",
  display: "flex",
  alignItems: "center",
  fontSize: "15px",
};

const arrowStyle: React.CSSProperties = {
  marginRight: "8px",
  fontSize: "10px",
  width: "12px",
};

// Background Grey for Hints & Resources content
const hintContentGrey: React.CSSProperties = {
  padding: "12px",
  margin: "5px 0 10px 0",
  backgroundColor: "#262626", // Dark Grey
  border: "1px solid #333",
  borderRadius: "4px",
  color: "#ccc",
  lineHeight: "1.5",
  fontSize: "14px",
};

// Background Blue for Topics content
const hintContentBlue: React.CSSProperties = {
  padding: "12px",
  margin: "5px 0 10px 0",
  backgroundColor: "#1a2a36", // Deep Navy/Blue
  border: "1px solid #35597a",
  borderRadius: "4px",
  color: "#ccc",
  fontSize: "14px",
};

const topicTagStyle: React.CSSProperties = {
  display: "inline-block",
  background: "#2a4a66",
  color: "#b5e0ff",
  border: "1px solid #4a6a8a",
  borderRadius: "3px",
  padding: "2px 8px",
  fontSize: "12px",
};

const resourceLinkStyle: React.CSSProperties = {
  color: "#7ab5db",
  fontSize: "13px",
  textDecoration: "underline",
  display: "block",
};
