import { Api } from '../mongo.js';


const checkApi = async (req) => {
    console.log("request.body", req.body, req.headers);
    if (!req.headers["x-key"] || !req.headers["x-sign"] || !req.headers["x-timmestamp"]) {
        return false
    }
    let item = await Api.getOrganization({ filter: {} })
    console.log("item", item)
    return true
}

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
    },
    {
        method: "post",
        url: "/open/bank",
        fn: async (req, res) => {
            return res.json(await Api.getBank({}));


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
    },

    {
        method: "post",
        url: "/user/bank/:type",
        fn: async (req, res) => {
            if (req.params.type == "get") {
                return res.json(await Api.getBank());

            } else if (req.params.type == "set") {
                return res.json(await Api.setBank(req.body));
            }
        }
    },

    {
        method: "post",
        url: "/user/specialization/:type",
        fn: async (req, res) => {
            if (req.params.type == "get") {
                return res.json(await Api.getBank());

            } else if (req.params.type == "set") {
                return res.json(await Api.setBank(req.body));
            }
        }
    }
]

const BankApi = [
    {
        method: "post",
        url: "/Bank/:type",
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
    {
        method: "post",
        url: "/vuz",
        fn: async (req, res) => {
            console.log("1111")
            if (!checkApi(req)) {
                return res.json({ error: "Доступ запрещен" });
            }

            if (req.params?.type == "set") {
                console.log("request.body", req.body);
                return res.json(await Api.setBank(req.body));
            } else {
                console.log("request.body get", req.params);
                return res.json(await Api.getBank({}));
            }
            console.log("req.params", req.params)

        }
    }
]

export default [...OpenApi, ...UserApi, ...BankApi, ...VuzApi]
