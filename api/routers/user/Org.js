import { Api } from '../../mongo.js';


let data = {
    method: "post",
    url: "/user/Org/:type",
    fn: async (req, res) => {
        console.log("req.params", req.params)
        console.log("request.body", req.body);
        return res.json(await Api.getBank({}));
    }
}


export default data
