import app from "./app";
import AppDataSource from "./data-source";


const port: number = 3000;

(async () => {

    await AppDataSource.initialize().then(() => {
        console.log("DataBase Postegre conectado");

        app.listen(port, () => {
        console.log(`API sucessfully started on port ${port}`);

    })  
    }).catch((err:string) => {
        console.error("Error during DataSource initialization", err)
    })
    
})()