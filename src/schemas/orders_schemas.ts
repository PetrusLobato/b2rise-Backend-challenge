import { Schema, z } from "zod";



const purchaseOrdersSchemaResult = z.object({
    id:z.string().optional(),
    date: z.date(),
    user: z.object({
        id: z.string().optional()
    })
}).transform((schema) => ({
    id: schema.id,
    date: schema.date,
    user_id: schema.user.id
}))


const purchaseOrdersItemsSchemaResult = z.object({
    id:z.string().optional(),
    product: z.object({id: z.string()}),
    quantity: z.number(),
    price: z.number(),
    purchase_order: z.object({id: z.string().optional()})
}).transform((schema) => ({
    id: schema.id,
    product_id: schema.product.id,
    purchase_order_id: schema.purchase_order.id, 
    quantity: schema.quantity,
    price: schema.price
}))

const loginSchema = z.object({
    email:z.string(),
    password: z.string()

})



const historySchemaResult = z.object({
    id:z.string().optional(),
    product: z.object({id: z.string()}),
    quantity: z.number(),
    price: z.string(),
}).transform((schema) => ({
    id: schema.id,
    quantity: schema.quantity,
    price: schema.price,
    product_id: schema.product.id
}))



const arrayResultUserSchema = purchaseOrdersItemsSchemaResult.array()
const arrayhistorySchema = historySchemaResult.array()

export { arrayResultUserSchema, purchaseOrdersItemsSchemaResult, purchaseOrdersSchemaResult, loginSchema, historySchemaResult, arrayhistorySchema};