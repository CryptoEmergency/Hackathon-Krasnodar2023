import * as crypto from 'crypto';
import { decrypt, encrypt } from './api/crypto.js'
import dotenv from "dotenv";
dotenv.config();

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

const SendApplication = () => {
    let data = { action: "get", data: { filter: {} } }
    let headersOpt = makeSign(data)
    // let crData = encrypt(JSON.stringify(data), process.env.BANKAPIKEY, headersOpt["X-TIMESTAMP"])
    // console.log(crData)
    // let decrData = decrypt(crData, process.env.BANKAPIKEY, headersOpt["X-TIMESTAMP"])
    // console.log(decrData)

    fetch("http://127.0.0.1:5678/api/TestBank", {
        method: "POST",
        headers: headersOpt,
        body: JSON.stringify(data),
    })
}

SendApplication()