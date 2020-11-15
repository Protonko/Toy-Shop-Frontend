import {ReactComponent} from '*.svg';
import {TFilterData} from 'models/types';

export interface IBaseConfig {
  baseURL: string,
  headers?: Headers,
}

export interface IImageThumbnails {
  original: string,
  thumbnail: string
}

// Products
export interface IProduct {
  category: string,
  title: string,
  image: string,
  checked: boolean,
  id: number,
  price: number,
  rating: number,
  sale: number,
}

export interface IProductDetail {
  id: number,
  title: string,
  price: number,
  images: Array<string>,
  sale?: number,
  rating: number,
  checked: boolean,
  description: Array<ILinesItems | void>,
  about?: string,
}
// ./Product

// Socials
export interface ISocials {
  href: string,
  Icon: typeof ReactComponent,
}
// ./Socials

// Delivery
export interface ILines {
  id?: string,
  description: string,
  items: Array<ILinesItems>,
}

export interface ILinesItems {
  id?: string,
  term: string,
  value: string,
  marked: boolean,
}

export interface IDelivery {
  id?: string,
  title: string,
  description: string,
  lines: Array<ILines>,
}
// ./Delivery

// Payment
export interface IPayment {
  id: string,
  title: string,
  description: string,
  image?: string,
}
// ./Payment

// Filter
export interface IFilterData {
  id: number,
  title: string,
  code: TFilterData,
}
// ./Filter

// Navbar
export interface INavData {
  id?: number,
  href: string,
  title: string,
}
// ./Navbar

// Order
export interface IOrderCost {
  amount: number,
  total: number,
  fullPrice: number,
  sale: number,
}
// ./Order
