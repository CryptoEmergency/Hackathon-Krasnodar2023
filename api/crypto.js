import * as crypto from 'crypto';


const iv = crypto.randomBytes(16).toString("hex").slice(0, 16);

// our secret message
const message = "Hello There, I should be a secret";

// secret key
const key = "12345678123456781234567812345678";

// make the encrypter function
const encrypter = crypto.createCipheriv("aes-256-cbc", key, iv);

// encrypt the message
// set the input encoding
// and the output encoding
let encryptedMsg = encrypter.update(message, "utf8", "hex");

// stop the encryption using
// the final method and set
// output encoding to hex
encryptedMsg += encrypter.final("hex");

console.log(encryptedMsg);

const decrypter = crypto.createDecipheriv("aes-256-cbc", key, iv);

let decryptedMsg = decrypter.update(encryptedMsg, "hex", "utf8");

// stop the decryption using
// the final method and set
// output encoding to utf8
decryptedMsg += decrypter.final("utf8");

console.log("Decrypted message: " + decryptedMsg);

export const encrypt = ((val, ENC_KEY, IV) => {
    const key = crypto
        .createHash('sha512')
        .update(ENC_KEY)
        .digest('hex')
        .substring(0, 32)
    const encryptionIV = crypto
        .createHash('sha512')
        .update(String(IV))
        .digest('hex')
        .substring(0, 16)
    let cipher = crypto.createCipheriv('aes-256-cbc', key, encryptionIV);
    let encrypted = cipher.update(val, 'utf8', 'base64');
    encrypted += cipher.final('base64');
    return encrypted;
});

export const decrypt = ((encrypted, ENC_KEY, IV) => {
    const key = crypto
        .createHash('sha512')
        .update(ENC_KEY)
        .digest('hex')
        .substring(0, 32)

    const encryptionIV = crypto
        .createHash('sha512')
        .update(String(IV))
        .digest('hex')
        .substring(0, 16)

    const buff = Buffer.from(encrypted, 'base64')
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, encryptionIV)
    return (
        decipher.update(buff.toString('utf8'), 'hex', 'utf8') +
        decipher.final('utf8')
    )
});

