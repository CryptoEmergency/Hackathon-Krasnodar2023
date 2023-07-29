import express from 'express'
import routers from './routers/lists.js'

const app = express();
const Router = express.Router();

for (let item of routers) {
    Router[item.method]("/api" + item.url, item.fn)
}
app.use(express.json());
app.use(Router);
app.listen(5678, (error) => {
    if (error) {
        console.error("Ошибка запуска сервера.", error)
        return;
    } else {
        console.log("👍 Сервер запущен 👍\n Ошибок не обнаружено!")
        return;
    }
});