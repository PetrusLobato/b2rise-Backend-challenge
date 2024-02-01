import express from "express"


const app = express();
app.use(express.json())


app.use("/user", userRoute);
app.use("/product", productRoute);


export default app