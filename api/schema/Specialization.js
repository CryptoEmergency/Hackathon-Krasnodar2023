import { mongoose } from '../mongo.js'

const data = {};
data.name = "Specialization";
data.collection = "uchis_specialization";

const standartDate = {
    timestamps: { createdAt: "dateCreate", updatedAt: "dateUpdate" },
    versionKey: false,
};

data.schema = new mongoose.Schema(
    {
        name: { type: String },
        numberOfSeats: { type: Number },
        type: { type: String },
        formOfEducation: { type: String },
        trainingPeriod: { type: Number },  
        price: { type: Number }, 
    },
    standartDate
);

const model = mongoose.model(data.collection, data.schema);

data.get = async function () {
    const query = model.find({});
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
