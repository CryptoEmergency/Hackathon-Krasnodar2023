import { mongoose } from '../mongo.js'

const data = {};
data.name = "Organization";
data.collection = "uchis_organization";

const standartDate = {
    timestamps: { createdAt: "dateCreate", updatedAt: "dateUpdate" },
    versionKey: false,
};

data.schema = new mongoose.Schema(
    {
        name: { type: String },
        type: { type: String },
        verification: { type: Boolean },
    },
    standartDate
);

const model = mongoose.model(data.collection, data.schema);

data.get = async function () {
    const query = model.find({});
    return await query.exec();
}

data.set = async function () {

};

export default data
