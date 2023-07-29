import { Api } from '../mongo.js';

const checkApi = async (req) => {
    if (!req.headers["x-key"] || !req.headers["x-sign"] || !req.headers["x-timmestamp"]) {
        return false
    }
    let item = await Api.getBank({ filter: { api: req.headers["x-key"] } })
    console.log("checkApi", item)

    let hmac = crypto.createHmac("sha256", item?.secretApi);
    let str = req.headers["x-timmestamp"] + "#" + JSON.stringify(req.body)
    let signature = hmac.update(Buffer.from(str, 'utf-8')).digest("hex");

    if (signature != req.headers["x-sign"]) {
        return false
    }
    console.log("item", item)


    return true
}

const OpenApi = [
    {
        method: "post",
        url: "/open/institute",
        fn: async (req, res) => {
            return res.json(await Api.getInstitute({}));
        }
    },
    {
        method: "post",
        url: "/open/bank",
        fn: async (req, res) => {
            return res.json(await Api.getBank({}));
        }
    },
    {
        method: "post",
        url: "/open/applications/:type",
        fn: async (req, res) => {

            if (req.params.type == "set") {
                return res.json(await Api.setApplications(req.body));
            }
        }
    },
]

const UserApi = [
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
        url: "/user/institute/:type",
        fn: async (req, res) => {
            if (req.params.type == "get") {
                return res.json(await Api.getInstitute());

            } else if (req.params.type == "set") {
                return res.json(await Api.setInstitute(req.body));
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
        url: "/institute",
        fn: async (req, res) => {
            if (!checkApi(req)) {
                return res.json({ error: "Доступ запрещен" });
            }

        }
    }
]

export default [...OpenApi, ...UserApi, ...BankApi, ...VuzApi]
