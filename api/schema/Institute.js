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
        title: { type: String },
        description: { type: String },
        city: { type: String },
        priceFrom: { type: Number },
        address: { type: String },
        bankCredit: [{
            nameBank: { type: String },
            percent: { type: Number },
            monthlyPayment: { type: Number }
        }],
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
