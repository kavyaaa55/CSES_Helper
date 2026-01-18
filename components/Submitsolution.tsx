import { useState } from "react";
import { submitSolution } from "@/lib/api";
import { getUsernameFromPage } from "@/lib/username";
import { fetchSolutionLink } from "@/lib/solutionlink";

function isAcceptedResultPage() {
  const isResultUrl = /\/problemset\/result\/\d+\/?$/.test(
    window.location.pathname
  );
  const verdictEl = document.querySelector(".inline-score.verdict");
  return isResultUrl && !!verdictEl;
}

function fetchproblemLink(): string {
  const taskLink = document.querySelector(
    'table.summary-table tbody tr td a[href*="/problemset/task/"]'
  );

  if (taskLink instanceof HTMLAnchorElement) {
    const match = taskLink.href.match(/\/problemset\/task\/(\d+)/);
    return match ? match[1] : "";
  }
  return "";
}

function isAccepted(): boolean {
  const rows = document.querySelectorAll("table.summary-table tbody tr");

  for (const row of rows) {
    const cells = row.querySelectorAll("td");
    if (cells.length < 2) continue;

    const label = cells[0].textContent?.trim();
    if (label === "Result:") {
      const verdictText = cells[1].textContent?.trim();
      return verdictText === "ACCEPTED";
    }
  }

  return false;
}



const containerStyle: React.CSSProperties = {
  margin: "12px 0",
};

const buttonStyle = (disabled: boolean): React.CSSProperties => ({
  padding: "8px 20px",
  border: "none",
  cursor: disabled ? "not-allowed" : "pointer",
  backgroundColor: disabled ? "#666" : "#5cb85c",
  color: "#fff",
  fontSize: "14px",
  fontWeight: 500,
  boxShadow: "none",
});

const acceptedBadgeStyle: React.CSSProperties = {
  display: "inline-block",
  backgroundColor: "#5cb85c",
  color: "#fff",
  padding: "4px 10px",
  fontSize: "13px",
  fontWeight: 600,
  textTransform: "uppercase",
  lineHeight: "1",
  marginTop: "8px",
};

const infoBadgeStyle: React.CSSProperties = {
  display: "inline-block",
  backgroundColor: "#f0ad4e", // warning
  color: "#fff",
  padding: "4px 10px",
  fontSize: "13px",
  fontWeight: 600,
  lineHeight: "1",
  marginTop: "8px",
};



export default function SubmitSolution() {

  if (!isAcceptedResultPage()) return null;

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "notAccepted" | null>(null);

  const problemId = fetchproblemLink();
  const username = getUsernameFromPage() || "";
  const solutionLink = fetchSolutionLink();
  const accepted = isAccepted();

  const handleSubmit = async () => {
    setStatus(null);
    if (!solutionLink || !problemId || !username) return;

    if (!accepted) {
      setStatus("notAccepted");
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      await submitSolution({ problemId, username, solutionLink });
      setStatus("success");
    } catch {
      setStatus("notAccepted");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={containerStyle}>
      <button
        onClick={handleSubmit}
        disabled={loading}
        style={buttonStyle(loading)}
      >
        {loading ? "Submitting..." : "Submit Solution"}
      </button>

      {status === "success" && (
        <div style={containerStyle}>solution submitted</div>
      )}

      {status === "notAccepted" && (
        <div style={containerStyle}>
          You can only submit accepted solutions
        </div>
      )}
    </div>
  );

}

