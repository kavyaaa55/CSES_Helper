import { useState } from "react";
import { submitSolution } from "@/lib/api";
import { getUsernameFromPage } from "@/lib/username";
import {
  fetchSolutionLink,
  isAcceptedResultPage,
  isVerdictAccepted,
} from "@/lib/solutionlink";
import { getProblemIdFromResultPage } from "@/lib/problemid";

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

/**
 * Button rendered on CSES result pages to publish an accepted solution.
 * Returns null if the current page is not a result page.
 */
export default function SubmitSolution() {
  if (!isAcceptedResultPage()) return null;

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "notAccepted" | null>(null);

  const problemId = getProblemIdFromResultPage();
  const username = getUsernameFromPage() || "";
  const solutionLink = fetchSolutionLink();
  const accepted = isVerdictAccepted();

  const handlePublish = async () => {
    setStatus(null);

    // Guard: need all three pieces of data
    if (!solutionLink || !problemId || !username) return;

    // Guard: only accepted solutions can be published
    if (!accepted) {
      setStatus("notAccepted");
      return;
    }

    setLoading(true);
    try {
      console.log(problemId, username, solutionLink);
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
        onClick={handlePublish}
        disabled={loading}
        style={buttonStyle(loading)}
      >
        {loading ? "publishing..." : "Publish Solution"}
      </button>

      {status === "success" && (
        <div style={containerStyle}>Solution published</div>
      )}

      {status === "notAccepted" && (
        <div style={containerStyle}>
          You can only publish accepted solutions
        </div>
      )}
    </div>
  );
}
