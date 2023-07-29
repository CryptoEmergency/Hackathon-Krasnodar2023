import { mongoose } from '../mongo.js'

const data = {};
data.name = "Key";
data.collection = "uchis_key";

const standartDate = {
    timestamps: { createdAt: "dateCreate", updatedAt: "dateUpdate" },
    versionKey: false,
};

data.schema = new mongoose.Schema(
    {
        type: { type: String },
        secretKey: { type: String },
        api: { type: String },
        idType: { type: String }
    },
    standartDate
);

const model = mongoose.model(data.collection, data.schema);

data.get = async function ({ filter = {} }) {
    const query = model.find(filter);
    return await query.exec();
}

data.set = async function ({ insert, filter = {}, update }) {
    if (insert) {
        let record = new model();
        Object.assign(record, insert)
        const result = await record.save()
        return result
    }
};

export default data
