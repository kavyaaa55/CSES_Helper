const BASE_URL = import.meta.env.VITE_API_BASE_URL;

if (!BASE_URL) {
  throw new Error("VITE_API_BASE_URL is not defined");
}

export async function submitSolution(data: {
  problemId: string;
  username: string;
  solutionLink: string;
}) {
  const res = await fetch(`${BASE_URL}/api/solutions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to submit solution");
  }

  return res.json();
}

export async function fetchSolutions(problemId: string) {
  const res = await fetch(
    `${BASE_URL}/api/solutions?problemId=${problemId}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch solutions");
  }

  return res.json();
}

