import { mongoose } from '../mongo.js'

const data = {};
data.name = "Institute";
data.collection = "uchis_institute";

const standartDate = {
    timestamps: { createdAt: "dateCreate", updatedAt: "dateUpdate" },
    versionKey: false,
};

data.schema = new mongoose.Schema(
    {
        name: { type: String },
    },
    standartDate
);

const model = mongoose.model(data.collection, data.schema);

data.get = async function ({ filter = {} }) {
    const query = model.find(filter);
    return await query.exec();
}

data.set = async function () {

};

export default data