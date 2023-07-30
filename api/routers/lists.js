import { Api } from '../mongo.js';
import * as crypto from 'crypto';

const makeSign = (data) => {
    const timestamp = new Date().getTime()
    let hmac = crypto.createHmac("sha256", process.env.BANKSECRETKEY);
    let str = timestamp + "#" + JSON.stringify(data)
    let signature = hmac.update(Buffer.from(str, 'utf-8')).digest("hex");
    const headersOpt = {
        "content-type": "application/json",
        'X-KEY': process.env.BANKAPIKEY,
        'X-SIGN': signature,
        'X-TIMESTAMP': timestamp
    };
    return headersOpt
}

const checkApi = async (req) => {
    if (!req.headers["x-key"] || !req.headers["x-sign"] || !req.headers["x-timestamp"]) {
        return false
    }

    let item = await Api.getKey({ filter: { api: req.headers["x-key"] } })
    if (!item || !item[0]?.secretKey) {
        return false
    }
    let secretKey = item[0]?.secretKey

    let hmac = crypto.createHmac("sha256", secretKey);
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
            if (req.params?.type == "get") {
                return res.json(await Api.getApplications());
            } else if (req.params?.type == "set") {
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
    },
    {
        method: "post",
        url: "/user/key/:type",
        fn: async (req, res) => {
            if (req.params?.type == "get") {
                return res.json(await Api.getKey());
            } else if (req.params?.type == "set") {
                return res.json(await Api.setKey(req.body));
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
            let tim = Math.floor(Math.random() * 6000)
            setTimeout(() => {
                let data = { action: "get", data: { filter: { g: 1 } } }
                let headersOpt = makeSign(data)

                fetch("http://127.0.0.1:5678/api/FromBank", {
                    method: "POST",
                    headers: headersOpt,
                    body: JSON.stringify(data),
                })
            }, tim);
            return res.json({ status: "ok" });
        }
    },
    {
        method: "post",
        url: "/FromBank",
        fn: async (req, res) => {
            if (await checkApi(req) === false) {
                return res.json({ error: "Доступ запрещен" });
            }
            console.log("FromBank", req.body)
            return res.json({ status: "ok" });
        }
    }
]

export default [...OpenApi, ...UserApi, ...BankApi, ...InstituteApi, ...TestBankApi]
