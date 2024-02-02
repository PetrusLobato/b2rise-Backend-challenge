import app from "./app";


const port: number = 3000;

(async () => {

    app.listen(port, () => {
        console.log(`API sucessfully started on port ${port}`)
    })    
})()