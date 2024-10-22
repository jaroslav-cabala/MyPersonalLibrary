export function debounce(action: (...args) => void, delayMs: number): typeof action {
  let timeoutId: number;

  return (...actionArgs) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => action(actionArgs), delayMs);
  };
}