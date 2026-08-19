/**
 * API utilities for communicating with the CSES Helper backend.
 * Backend URL extracted from deployed extension bundle v1.0.1
 */

const BASE_URL = "https://csesbackend-x33g.vercel.app";

/**
 * Submit a solution link to the backend.
 * Only accepted solutions on CSES can be published.
 */
export async function submitSolution(data: {
  problemId: string;
  username: string;
  solutionLink: string;
}): Promise<unknown> {
  const payload = {
    problemId: Number(data.problemId),
    username: data.username,
    solutionLink: data.solutionLink,
  };

  const res = await fetch(`${BASE_URL}/api/solutions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error("Error response:", errorText);
    throw new Error(`Failed to submit solution: ${res.status}`);
  }

  return res.json();
}

/**
 * Fetch all published solutions for a given problem.
 */
export async function fetchSolutions(
  problemId: string
): Promise<{ username: string; solutionLink: string }[]> {
  const res = await fetch(`${BASE_URL}/api/solutions?problemId=${problemId}`);

  if (!res.ok) {
    const errorText = await res.text();
    console.error("Error response:", errorText);
    throw new Error(`Failed to fetch solutions: ${res.status}`);
  }

  return res.json();
}
