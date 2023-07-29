import { Api } from '../mongo.js';


const OpenApi = [
    {
        method: "post",
        url: "/open/Institute",
        fn: async (req, res) => {
            // let tmp = await Api.getInstitute({})
            return res.json(await Api.getInstitute({}));
        }
    },
    {
        method: "post",
        url: "/open/vuz",
        fn: async (req, res) => {
            return res.json(await Api.getVuz({}));


        }
    }
]

const UserApi = [
    {
        method: "post",
        url: "/user/Org/:type",
        fn: async (req, res) => {
            console.log("req.params", req.params)
            console.log("request.body", req.body);
            return res.json(await Api.getBank({}));
        }
    },
    {
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
]

const BankApi = [
    {
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
]

const VuzApi = [

]

export default [...OpenApi, ...UserApi, ...BankApi, ...VuzApi]
