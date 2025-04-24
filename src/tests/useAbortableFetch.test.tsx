
import { render, screen, waitFor } from "@testing-library/react";
import { useAbortableFetch } from "../shared/hooks/useAbortableFetch";
import { useState } from "react";

const TestComponent = ({ search }: { search: string }) => {
  const [result, setResult] = useState("");

  // This is a mock of the useAbortableFetch hook
  useAbortableFetch(
    async (signal) => {
      await new Promise((res) => setTimeout(res, 100));
      if (!signal.aborted) setResult(`Result for: ${search}`);
    },
    [search]
  );

  return <div>{result}</div>;
};

describe("useAbortableFetch", () => {
  test("runs async function and updates result", async () => {
    const { rerender } = render(<TestComponent search="batman" />);

    await waitFor(() => screen.getByText(/Result for: batman/i), {
      timeout: 500,
    });

    rerender(<TestComponent search="superman" />);
    await waitFor(() => screen.getByText(/Result for: superman/i), {
      timeout: 500,
    });
  });
});
