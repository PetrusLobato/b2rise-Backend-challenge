import { z } from "zod";



const userSchema = z.object({
    id:z.string().optional(),
    email: z.string().email().nonempty({message: " required email!"}),
    username: z.string().max(50),
    password: z.string().nonempty(),
    first_name: z.string(),
    last_name: z.string()


})

const resultUserSchema = userSchema.pick({
    id: true,
    email: true,
    username: true,
    first_name: true,
    last_name: true
})

const arrayResultUserSchema = resultUserSchema.array()

export { userSchema, resultUserSchema, arrayResultUserSchema};