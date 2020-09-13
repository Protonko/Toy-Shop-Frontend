export interface IBaseConfig {
  baseURL: string
  headers?: Headers
}

// Products
export interface IProduct {
  category: string
  title: string
  image: string
  checked: boolean
  id: number
  price: number
  rating: number
  sale: number
}
// ./Products

// Delivery
export interface ILines {
  id: string
  description: string
  items: Array<ILinesItems>
}

export interface ILinesItems {
  id: string,
  term: string
  value: string
  marked: boolean
}

export interface IDelivery {
  id: string,
  title: string,
  description: string,
  lines: ILines
}
// ./Delivery

// Payment
export interface IPayment {
  id: string,
  title: string
  description: string
  image?: string
}
// ./Payment
