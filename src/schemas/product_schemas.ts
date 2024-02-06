import { z } from "zod";


const productSchema = z.object({
    id:z.string().optional(),
    title: z.string().max(30),
    price: z.number(),
    description: z.string(),
    category: z.string(),
    image: z.string()


})



const arrayResultproductSchema = productSchema.array()

export {productSchema, arrayResultproductSchema };