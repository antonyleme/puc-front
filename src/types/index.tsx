export interface IProduct {
  descricao: string,
  valor: number,
  id: string,
  estoque: number,
  // category: string
}

export interface IEntry {
  id: string,
  name: string,
  qtd: string,
}

export interface IUseFetch {
  data: any,
  mutate: (data?: any, options?: any) => Promise<void>,
  error: any,
  isValidating: boolean,
}

export interface IProductForm {
  descricao: string,
  valor: number,
  estoque?: number
}
