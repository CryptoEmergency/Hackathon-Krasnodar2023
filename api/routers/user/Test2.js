import { Api } from '../../mongo.js';


let data = {
    method: "get",
    url: "/user/test",
    fn: async (req, res) => {
        let tmp = await Api.getUsers({})
        console.log("gfgg22222=", tmp)
        return res.json(tmp);
    }
}


export default data