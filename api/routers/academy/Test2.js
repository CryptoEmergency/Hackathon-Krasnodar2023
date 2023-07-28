import { Api } from '../../mongo.js';

let data = {
    method: "get",
    url: "/academy/testt",
    fn: async (req, res) => {
        let tmp = await Api.getUsers({})
        console.log("academy=", tmp)
        return res.json(tmp);
    }
}


export default data