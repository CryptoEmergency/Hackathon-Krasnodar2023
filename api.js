import express from 'express'
import { MakeRouters } from './api/router.js'
const app = express();
const Router = express.Router();

MakeRouters(Router)


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