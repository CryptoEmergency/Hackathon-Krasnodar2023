import { Api } from '../../mongo.js';


let data = {
    method: "post",
    url: "/user/vuz/:type",
    fn: async (req, res) => {
        if (req.params.type == "get") {
            return res.json(await Api.getVuz({}));

        } else if (req.params.type == "set") {
            return res.json(await Api.setVuz(req.body));
        }


    }
}


export default data
