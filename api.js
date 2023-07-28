import express from 'express'
import dotenv from "dotenv";

import { MakeRouters } from './api/router.js'
import { connectMongo } from './api/mongo.js'


dotenv.config();

const app = express();
const Router = express.Router();

MakeRouters(Router)
connectMongo()

export const ServerStart = (port) => {
    app.use(Router);

    app.listen(port, (error) => {
        if (error) {
            console.error("Ошибка запуска сервера.", error)
            return;
        } else {
            console.log("👍 Сервер запущен 👍\n Ошибок не обнаружено!")
            return;
        }
    });
}