

export interface IPurchaseOrders {
  id: string;
  user_id?: string;
  date: Date;
}

export interface IPurchaseOrdersItems {
  id?: string;
  product_id: string;
  purchase_order_id?: string;
  quantity: number;
  price: number;
}

export interface IOrdersLogin {
  email: string;
  password: string;
}

