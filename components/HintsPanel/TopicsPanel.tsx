// import {
//   hintHeaderStyle,
//   hintContentBlue,
//   topicTagStyle,
//   arrowStyle,
// } from "./styles";
//
import { getStyles } from "./styles";
type Props = {
  topics: string[];
  open: boolean;
  toggle: () => void;
};

export default function TopicsPanel({ topics, open, toggle }: Props) {
  const styles = getStyles();
  return (
    <div>
      <div style={styles.hintHeaderStyle} onClick={toggle}>
        <span style={styles.arrowStyle}>{open ? "▼" : "▶"}</span>
        <span>Topics</span>
      </div>

      {open && (
        <div style={styles.hintContentBlue}>
          {topics.length ? (
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {topics.map((t, i) => (
                <span key={i} style={styles.topicTagStyle}>
                  {t}
                </span>
              ))}
            </div>
          ) : (
            <em>No topics available.</em>
          )}
        </div>
      )}
    </div>
  );
}

