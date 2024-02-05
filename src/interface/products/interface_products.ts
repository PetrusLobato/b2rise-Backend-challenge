export interface IProducts {
    id?: string
    title: string
    price: number
    description: string
    category:string
    image: string
}

export interface IUpdateProducts {
    id?: string
    title?: string
    price?: number
    description?: string
    category?:string
    image?: string
}