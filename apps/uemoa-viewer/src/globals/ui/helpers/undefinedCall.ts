/**
 * Calls `fn` with `arg` if `fn` is defined, otherwise returns undefined.
 * Useful for safely invoking optional event handler props.
 */
export const undefinedCall = <T>(
  fn: ((arg: T) => any) | undefined,
  arg: T,
): any => {
  if (fn !== undefined) return fn(arg);
  return undefined;
};
