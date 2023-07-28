import { mongoose } from '../mongo.js'

const data = {};
data.name = "Users";
data.collection = "uchis_bank";

const standartDate = {
    timestamps: { createdAt: "dateCreate", updatedAt: "dateUpdate" },
    versionKey: false,
};

data.schema = new mongoose.Schema(
    {
        name: { type: String },
        credit: [{ 
            nameCredit: { type: String },
            amountOfCredit: { type: String }, // сумма кредита
            creditTerm: { type: Number }, // срок
            monthlyPayment: { type: Number }, // ежемесячный платёж
            interestRate: { type: Number }, // процентная ставка
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

data.set = async function () {

};

export default data
