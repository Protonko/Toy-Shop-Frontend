export interface IBaseConfig {
  baseURL: string
  headers?: Headers
}

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
