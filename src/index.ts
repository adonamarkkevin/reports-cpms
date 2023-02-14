import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";
import { AppDataSource } from "./data-source";
dotenv.config();

AppDataSource.initialize()
    .then(async () => {
        const app = express();

        process.env.TZ = "Asia/Manila";

        const corsOpts = {
            origin: true,
            methods: ["GET", "POST", "DELETE", "PUT"],
            allowedHeaders: ["Content-Type", "authorization", "x-access-token"],
            credentials: true,
            exposedHeaders: ["set-cookie"],
        };
        app.use(express.json());

        app.use(cors(corsOpts));

        //Routes

        const PORT = process.env.PORT || 3006;

        // run app
        app.listen(PORT, () => {
            console.log(`server started on localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.log("TypeORM connection error: ", error);
        process.exit(0);
    });
