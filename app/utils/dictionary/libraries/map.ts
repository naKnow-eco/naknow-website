const values = <T, R>(
  data: T,
  callback: (value: ValueOf<T>, key: keyof T) => R,
): MapValue<T, R> => {
  const result = {} as MapValue<T, R>;
  for (const key in data) result[key] = callback(data[key] as ValueOf<T>, key);
  return result;
};

export const MapLib = {
  values,
};
