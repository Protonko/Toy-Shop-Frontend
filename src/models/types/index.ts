export type TClassName = Array<string | {[key: string]: boolean}>

// common
export type TMerge<A, B> = ({ [K in keyof A]: K extends keyof B ? B[K] : A[K] } &
  B) extends infer O
  ? { [K in keyof O]: O[K] }
  : never;

// Filter
export type TFilterData = 'ALL' | 'PRICE_LOW' | 'PRICE_HIGH' | 'CATEGORY'
