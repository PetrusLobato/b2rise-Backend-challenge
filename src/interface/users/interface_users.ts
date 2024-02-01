export interface IUsers {
    id: string
    email: string
    username: string
    password: string
    frist_name:string
    last_name: string
}


export interface IPurchaseOrders {
    id: string
    user_id: string
    date: Date
}

export interface IPurchaseOrdersItems {
    product_id: string
    purchase_order_id: string
    quantity: number
    price: number
}