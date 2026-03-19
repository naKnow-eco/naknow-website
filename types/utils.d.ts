export {};

declare global {
  type WithReadonly<T extends unknown[]> = T | Readonly<T>;
  type Many<V> = readonly V[] | V;

  // UNION & INTERSECTION
  type UnionToIntersection<U>
    = (U extends unknown ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never;
  type Union<T> = T extends WithReadonly<(infer U)[]> ? U : never;
  type Intersection<T> = UnionToIntersection<Union<T>>;
}
