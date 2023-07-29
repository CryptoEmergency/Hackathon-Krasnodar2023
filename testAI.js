import { Configuration, OpenAIApi } from 'openai'
import dotenv from "dotenv";
dotenv.config();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const Ai = async function (text) {
    let ret = ""

    try {
        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            temperature: 1,
            // max_tokens: maxTokens,
            top_p: 0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
            messages: [{ "role": "user", "content": text }],
            // stop: ["\n"]
        });
        if (response?.data?.choices[0]?.message?.content) {
            ret = response.data.choices[0].message.content
        }
        console.log("ret", ret)
        return ret
    } catch (error) {
        catchError(error, "AiChat " + text)
        console.error('=Error AiChat=', error, text)
        return ret
    }

}

let tmp = Ai(`На основании моих ответов на вопросы определи какая специальность и профессия мне больше всего подходит для обучения и обьясни почему.
Мне хотелось бы в своей профессиональной деятельности:Общаться с самыми разными людьми
В книге или кинофильме меня больше всего привлекает:Художественная форма, мастерство писателя или режиссера
Меня больше обрадует Нобелевская премия:В области искусства
Я скорее соглашусь стать:Начальником экспедиции
Будущее людей определяют:Научные открытия
Если я стану руководителем, то в первую очередь займусь:Разработкой новых технологий обучения
На технической выставке меня больше привлечёт:Внутреннее устройство экспонатов
В людях я ценю, прежде всего:Обязательность и аккуратность
В свободное время мне хотелось бы:Ставить различные опыты, эксперименты
В заграничных поездках меня скорее заинтересует:Экстремальный туризм (альпинизм, виндсерфинг, горные лыжи)
Если бы в моей школе было всего три кружка, я бы выбрал:Технический
`)