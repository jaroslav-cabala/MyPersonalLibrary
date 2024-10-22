export const debounceSubsequent = <A>(action: (args: A) => void, delayMs: number): typeof action => {
  let timeoutId: number | undefined;

  return (actionArgs) => {
    if (timeoutId) {
      return;
    }

    action(actionArgs);

    timeoutId = window.setTimeout(() => (timeoutId = undefined), delayMs);
  };
};