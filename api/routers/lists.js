import { Api } from '../mongo.js';
import * as crypto from 'crypto';

const checkApi = async (req) => {
    if (!req.headers["x-key"] || !req.headers["x-sign"] || !req.headers["x-timestamp"]) {
        return false
    }

    let item = await Api.getBank({ filter: { api: req.headers["x-key"] } })
    if (!item || !item[0]?.secretApi) {
        return false
    }
    let secretApi = item[0]?.secretAp

    let hmac = crypto.createHmac("sha256", secretApi);
    let str = req.headers["x-timestamp"] + "#" + JSON.stringify(req.body)
    let signature = hmac.update(Buffer.from(str, 'utf-8')).digest("hex");

    if (signature != req.headers["x-sign"]) {
        return false
    }
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
            if (req.params?.type == "set") {
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
            if (req.params?.type == "get") {
                return res.json(await Api.getBank());
            } else if (req.params?.type == "set") {
                return res.json(await Api.setBank(req.body));
            }
        }
    },
    {
        method: "post",
        url: "/user/institute/:type",
        fn: async (req, res) => {
            if (req.params?.type == "get") {
                return res.json(await Api.getInstitute());
            } else if (req.params?.type == "set") {
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
            if (req.params?.type == "set") {
                return res.json(await Api.setBank(req.body));
            } else {
                return res.json(await Api.getBank({}));
            }
        }
    }
]

const InstituteApi = [
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

const TestBankApi = [
    {
        method: "post",
        url: "/TestBank",
        fn: async (req, res) => {
            if (await checkApi(req) === false) {
                return res.json({ error: "Доступ запрещен" });
            }
            return res.json({ status: "ok" });
        }
    }
]

export default [...OpenApi, ...UserApi, ...BankApi, ...InstituteApi, ...TestBankApi]
