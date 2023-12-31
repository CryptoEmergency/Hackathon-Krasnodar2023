import { mongoose } from '../mongo.js'

const data = {};
data.name = "Users";
data.collection = "uchis_users";

const standartDate = {
    timestamps: { createdAt: "dateCreate", updatedAt: "dateUpdate" },
    versionKey: false,
};

data.schema = new mongoose.Schema(
    {
        name: { type: String },
        email: { type: String },
        password: { type: String, maxLength: 32 },
        description: { type: String },
        age: { type: Number },
        city: { type: String },
        profession: { type: String },
        speciality: { type: String },
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
