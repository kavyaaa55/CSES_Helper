import { useEffect, useState } from "react";
import { fetchSolutions } from "@/lib/api";
import { getStyles } from "./styles";

type Solution = {
  username: string;
  solutionLink: string;
};

type Props = {
  questionId: string;
};

export default function ViewSolution({ questionId }: Props) {
  const styles = getStyles();

  const [solutions, setSolutions] = useState<Solution[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchSolutions(questionId)
      .then((data) => {
        if (Array.isArray(data)) setSolutions(data);
        else setSolutions([]);
      })
      .catch(() => setSolutions([]))
      .finally(() => setLoading(false));
  }, [questionId]);

  return (
    <div style={styles.containerStyle}>
      {/* Header (ALWAYS visible) */}
      <div
        style={styles.hintHeaderStyle}
        onClick={() => setOpen((o) => !o)}
      >
        <span style={styles.arrowStyle}>{open ? "▼" : "▶"}</span>
        <span>View Solutions</span>
      </div>

      {/* Dropdown content */}
      {open && (
        <div style={styles.hintContentGrey}>
          {loading ? (
            <em style={{ color: "#888", fontSize: "13px" }}>
              Loading...
            </em>
          ) : solutions.length ? (
            solutions.map((sol, i) => (
              <div
                key={i}
                style={{
                  cursor: "pointer",
                  marginBottom: "3px",
                  color: styles.resourceLinkStyle.color,
                  textDecoration: "underline",
                }}
                onClick={() => window.open(sol.solutionLink, "_blank")}
              >
                {sol.username}
              </div>
            ))
          ) : (
            <em style={{ color: "#888", fontSize: "13px" }}>
              No solution available.
            </em>
          )}
        </div>
      )}
    </div>
  );
}

