import { Api } from '../../mongo.js';


let data = {
    method: "get",
    url: "/open/test2",
    fn: async (req, res) => {
        let tmp = await Api.getUsers({})
        console.log("open=", tmp)
        return res.json(tmp);
    }
}


export default data