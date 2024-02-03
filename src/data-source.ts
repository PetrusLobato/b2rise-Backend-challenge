import "reflect-metadata";
import path from "path";
import { DataSource } from "typeorm";
import * as dotenv from 'dotenv';
dotenv.config();


const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.localhost || "localhost",
  port:  5432,
  username: process.env.TYPEORM_USERNAME || "",
  password: process.env.TYPEORM_PASSWORD || "",
  database: process.env.TYPEORM_DATABASE || "",
  logging: true,
  synchronize: false,
  entities: [path.join(__dirname, "./entities/**.{js,ts}")],
  migrations: [path.join(__dirname, "./migrations/**.{js,ts}")]
})

export default AppDataSource