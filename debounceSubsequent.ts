export function debounceSubsequent(action: (...args: any[]) => void, delayMs: number): typeof action {
  let timeoutId: number | undefined;

  return (...actionArgs) => {
    if (timeoutId) {
      return;
    }

    action(actionArgs);

    timeoutId = setTimeout(() => timeoutId = undefined, delayMs);
  };
}