import { Api } from '../../mongo.js';


let data = {
    method: "post",
    url: "/open/Bank/:type",
    fn: async (req, res) => {
        console.log(req.params.type)
        if (req.params?.type == "set") {
            console.log("request.body", req.body);
            return res.json(await Api.setBank(req.body));
        } else {
            console.log("request.body get", req.params);
            return res.json(await Api.getBank({}));
        }
        // console.log("req.params", req.params)
        
    }
}


export default data
