import { renderHook, act } from "@testing-library/react";
import { useDebounce } from "../shared/hooks/useDebounce";

jest.useFakeTimers();

describe("useDebounce", () => {
  test("should debounce value changes", () => {
    const { result, rerender } = renderHook(({ value }) => useDebounce(value, 500), {
      initialProps: { value: "bat" },
    });

    expect(result.current).toBe("bat");

    // Change value before debounce time
    rerender({ value: "batm" });
    rerender({ value: "batma" });
    rerender({ value: "batman" });

    // Debounced value should not change yet
    expect(result.current).toBe("bat");

    // Fast forward timer
    act(() => {
      jest.advanceTimersByTime(500);
    });

    expect(result.current).toBe("batman");
  });
});
