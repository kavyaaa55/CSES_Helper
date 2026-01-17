import { useState } from "react";
import { submitSolution } from "@/lib/api";
import { getProblemIdFromUrl } from "@/lib/problemid";
import { getUsernameFromPage } from "@/lib/username";
import { fetchSolutionLink } from "@/lib/solutionlink";

function isAcceptedResultPage() {
  const isResultUrl = /\/problemset\/result\/\d+\/?$/.test(window.location.pathname);
  const verdictEl = document.querySelector(".inline-score.verdict.ac");
  return isResultUrl && !!verdictEl;
}

function fetchproblemLink(): string {
  const taskLink = document.querySelector('table.summary-table tbody tr td a[href*="/problemset/task/"]');

  if (taskLink && taskLink instanceof HTMLAnchorElement) {
    const href = taskLink.getAttribute('href') || "";
    const match = href.match(/\/problemset\/task\/(\d+)/);
    return match ? match[1] : "";
  }

  return "";
}

export default function SubmitSolution() {
  if (!isAcceptedResultPage()) return null;

  //const [link, setLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const problmelink = fetchproblemLink();
  console.log(problmelink);
  // const problemIdNum = getProblemIdFromUrl(problmelink);
  // const problemId = problemIdNum ? String(problemIdNum) : "";
  const problemId = fetchproblemLink();
  const username = getUsernameFromPage() || "";
  const solutionLink = fetchSolutionLink();


  const handleSubmit = async () => {
    if (!solutionLink || !problemId || !username) {
      console.log(`solution link : ${solutionLink}`);
      console.log(`problem link : ${problemId}`);
      console.log(username);
      setStatus("Missing required information.");
      return;
    }
    console.log(solutionLink, problemId, username);
    setLoading(true);
    setStatus(null);
    try {
      await submitSolution({ problemId, username, solutionLink });
      setStatus("✓ Solution submitted successfully!");
    } catch {
      setStatus("✗ Failed to submit");
    } finally {
      setLoading(false);
    }
  };

  // Detect theme
  const bodyBg = getComputedStyle(document.body).backgroundColor;
  const isDark = bodyBg !== 'rgb(255, 255, 255)';
  return (
    <div style={containerStyle}>
      <div style={separatorStyle(isDark)}></div>

      <div style={formContainerStyle}>
        <button
          onClick={handleSubmit}
          disabled={loading}
          style={buttonStyle(loading)}
        >
          {loading ? "Submitting..." : "Submit Solution"}
        </button>
      </div>

      {status && (
        <div style={statusStyle(status.includes("✓"), isDark)}>
          {status}
        </div>
      )}

      <div style={separatorStyle(isDark)}></div>
    </div>
  );
}

// Styles
const containerStyle: React.CSSProperties = {
  margin: "20px 0",
  fontFamily: 'inherit',
};

const separatorStyle = (isDark: boolean): React.CSSProperties => ({
  height: "1px",
  backgroundColor: isDark ? "#444" : "#ddd",
  margin: "15px 0",
});

const formContainerStyle: React.CSSProperties = {
  display: "flex",
  gap: "10px",
  alignItems: "center",
  padding: "10px 0",
  flexWrap: "wrap",
};

const inputStyle = (isDark: boolean): React.CSSProperties => ({
  flex: "1",
  minWidth: "250px",
  padding: "8px 12px",
  backgroundColor: isDark ? "#2a2a2a" : "#fff",
  border: isDark ? "1px solid #444" : "1px solid #ccc",
  borderRadius: "3px",
  fontSize: "14px",
  color: isDark ? "#ccc" : "#333",
  outline: "none",
});

const buttonStyle = (disabled: boolean): React.CSSProperties => ({
  padding: "8px 20px",
  backgroundColor: disabled ? "#666" : "#5cb85c",
  color: "#fff",
  border: "none",
  borderRadius: "3px",
  fontSize: "14px",
  fontWeight: "500",
  cursor: disabled ? "not-allowed" : "pointer",
  opacity: disabled ? 0.6 : 1,
  transition: "background-color 0.2s",
});

const statusStyle = (isSuccess: boolean, isDark: boolean): React.CSSProperties => ({
  marginTop: "10px",
  padding: "8px 12px",
  backgroundColor: isSuccess
    ? (isDark ? "#2d4a2d" : "#d4edda")
    : (isDark ? "#4a2d2d" : "#f8d7da"),
  color: isSuccess
    ? (isDark ? "#5cb85c" : "#155724")
    : (isDark ? "#d9534f" : "#721c24"),
  border: `1px solid ${isSuccess
    ? (isDark ? "#3d5a3d" : "#c3e6cb")
    : (isDark ? "#5a3d3d" : "#f5c6cb")}`,
  borderRadius: "3px",
  fontSize: "14px",
});
