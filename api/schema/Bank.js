import { mongoose } from '../mongo.js'

const data = {};
data.name = "Bank";
data.collection = "uchis_bank";

const standartDate = {
    timestamps: { createdAt: "dateCreate", updatedAt: "dateUpdate" },
    versionKey: false,
};

data.schema = new mongoose.Schema(
    {
        name: { type: String },
        logo: { type: String },
        credit: [{
            nameCredit: { type: String },
            amountOfCredit: { type: String }, // сумма кредита
            creditTerm: { type: String }, // срок
            monthlyPayment: { type: String }, // ежемесячный платёж
            interestRate: { type: String }, // процентная ставка
            currency: { type: String }, // валюта
        }],
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
