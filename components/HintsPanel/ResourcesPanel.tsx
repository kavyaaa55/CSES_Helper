// import {
//   hintHeaderStyle,
//   hintContentGrey,
//   resourceLinkStyle,
//   arrowStyle,
// } from "./styles";
import { Resource } from "./types";
import { getStyles } from "./styles";

type Props = {
  resources: Resource[];
  open: boolean;
  toggle: () => void;
};

export default function ResourcesPanel({ resources, open, toggle }: Props) {
  const styles = getStyles();
  return (
    <div>
      <div style={styles.hintHeaderStyle} onClick={toggle}>
        <span style={styles.arrowStyle}>{open ? "▼" : "▶"}</span>
        <span>Resources</span>
      </div>

      {open && (
        <div style={styles.hintContentGrey}>
          {resources.length ? (
            resources.map((r, i) => (
              <a
                key={i}
                href={r.link}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.resourceLinkStyle}
              >
                <em>{r.linkname}</em>
              </a>
            ))
          ) : (
            <em>No resources available.</em>
          )}
        </div>
      )}
    </div>
  );
}

