export const flatten = (
  obj: object, separator = '.', prefix = '', res: Record<string, unknown> = {},
// eslint-disable-next-line complexity
): Record<string, unknown> => {
  for (const [key, val] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}${separator}${key}` : key;

    if (val && typeof val === 'object' && !Array.isArray(val)) {
      flatten(
        val, separator, fullKey, res,
      );
    }
    else res[fullKey] = val;
  }
  return res;
};
