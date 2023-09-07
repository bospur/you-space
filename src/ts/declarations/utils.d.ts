type Enumerate<
  N extends number,
  Acc extends number[] = []
> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>;

type IntRange<F extends number, T extends number> = Exclude<
  Enumerate<T>,
  Enumerate<F>
>;

type N<T> = T | null;
type U<T> = T | undefined;
type None = null | undefined;
type Nullish<T> = T | None;
type SetState<T> = Dispatch<SetStateAction<T>>;
type XY = [number, number];
type ValueOf<T> = T[keyof T];
type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
type OWKS<T> = Record<string, T>; // OWKS => Object with key string
type SN = string | number;
