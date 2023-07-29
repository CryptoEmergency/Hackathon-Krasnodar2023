import { Api } from '../../mongo.js';


let data = {
    method: "post",
    url: "/open/Bank",
    fn: async (req, res) => {
        return res.json(await Api.getBank({}));
    }
}


export default data
