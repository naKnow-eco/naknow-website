export {};

declare global {
  type Dictionary<T = unknown> = Record<string, T>;
  type ValueOf<T>
    = T extends Record<string | number | symbol, infer U> ? U
      : T extends Dictionary<infer U> ? U
        : T extends object ? T[keyof T]
          : never;

  // Map
  type MapValue<T, U> = { [K in keyof T]: U; };
  type MapDeep<T, U> = { [K in keyof T]: T[K] extends object ? MapDeep<T[K], U> : U; };
}
