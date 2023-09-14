export const debugKeyboardEvent = (e: KeyboardEvent) => {
  const {
    altKey,
    composed,
    ctrlKey,
    isComposing,
    key,
    location,
    metaKey,
    shiftKey,
    type,
  } = e;

  const test = {
    altKey,
    composed,
    ctrlKey,
    isComposing,
    key,
    location,
    metaKey,
    shiftKey,
    type,
  };

  console.log(JSON.stringify(test));
};
