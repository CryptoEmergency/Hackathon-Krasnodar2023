import { Api } from '../../mongo.js';


let data = {
    method: "post",
    url: "/open/Institute",
    fn: async (req, res) => {
        // let tmp = await Api.getInstitute({})
        return res.json(await Api.getInstitute({}));
    }
}


export default data