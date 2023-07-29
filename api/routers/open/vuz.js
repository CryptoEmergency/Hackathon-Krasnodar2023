import { Api } from '../../mongo.js';


let data = {
    method: "post",
    url: "/open/vuz",
    fn: async (req, res) => {
        return res.json(await Api.getVuz({}));


    }
}


export default data
