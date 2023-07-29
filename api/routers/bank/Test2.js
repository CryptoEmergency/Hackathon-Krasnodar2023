import { Api } from '../../mongo.js';


let data = {
    method: "get",
    url: "/bank/test2",
    fn: async (req, res) => {
        let tmp = await Api.getUsers({})
        console.log("bank=", tmp)
        return res.json(tmp);
    }
}


export default data
