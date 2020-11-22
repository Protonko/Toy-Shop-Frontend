import {TITLES_BUTTON, FILTER_TYPES} from 'models/enums';

export type TClassName = Array<string | {[key: string]: boolean}>
export type TTitleButton = TITLES_BUTTON.ADDED | TITLES_BUTTON.ADD

// common
export type TMerge<A, B> = ({ [K in keyof A]: K extends keyof B ? B[K] : A[K] } &
  B) extends infer O
  ? { [K in keyof O]: O[K] }
  : never;

export type TValueOf<T> = T[keyof T];

// Filter
export type TFilterData =
  | FILTER_TYPES.ALL
  | FILTER_TYPES.PRICE_LOW
  | FILTER_TYPES.PRICE_HIGH
  | FILTER_TYPES.CATEGORY;
