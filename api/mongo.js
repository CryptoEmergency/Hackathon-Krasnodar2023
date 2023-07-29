import mongoose from 'mongoose'
import schemaLists from './schema/lists.js'
import dotenv from "dotenv";
dotenv.config();

const Api = {}
mongoose.set('strictQuery', true);

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 10000
}

const db = mongoose.connection;

db.on('connecting', function () {
    console.log("trying to establish a connection to mongo");
});

db.on('connected', function () {
    console.log("connection established successfully");
});

db.on('error', function (err) {
    console.log('connection to mongo failed ' + err);
});

db.on('disconnected', function () {
    console.log('mongo db connection closed');
})

db.on('open', function () {
    console.log('mongo db open');
})

Object.keys(schemaLists).map((key) => {
    Api[`get${key}`] = {}
    Api[`set${key}`] = {}
    if (schemaLists[key].get) {
        Api[`get${key}`] = schemaLists[key].get
    }
    if (schemaLists[key].set) {
        Api[`set${key}`] = schemaLists[key].set
    }
})
mongoose.connect('mongodb://' + process.env.MDNAME + '@' + process.env.MDSERVER + '/' + process.env.MDBASE, options).then(() => {
    console.log("Подключено к базе")
    return true
}).catch((err) => {
    console.error("Mongo err", err)
    return false
});

export { Api, mongoose }
