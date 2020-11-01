import {TitlesButton} from 'models/enums';

export type TClassName = Array<string | {[key: string]: boolean}>
export type TTitleButton = TitlesButton.ADDED | TitlesButton.ADD

// common
export type TMerge<A, B> = ({ [K in keyof A]: K extends keyof B ? B[K] : A[K] } &
  B) extends infer O
  ? { [K in keyof O]: O[K] }
  : never;

export type TValueOf<T> = T[keyof T];

// Filter
export type TFilterData = 'ALL' | 'PRICE_LOW' | 'PRICE_HIGH' | 'CATEGORY'
