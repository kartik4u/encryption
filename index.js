var CryptoJS = require("crypto-js");
const crypto = require('crypto');


function encrypt(data={ firstName: "test" }) {
    var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), 'secret key 123').toString();
    return ciphertext
}

function decrypt(ciphertext) {
    // Decrypt
    var bytes = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
    var deciphertext = bytes.toString(CryptoJS.enc.Utf8);
    return deciphertext
}


function generateKeyFiles() {
    const keyPair = crypto.generateKeyPairSync('rsa', {
       modulusLength: 530,
       publicKeyEncoding: {
          type: 'spki',
          format: 'pem'
       },
       privateKeyEncoding: {
          type: 'pkcs8',
          format: 'pem',
          cipher: 'aes-256-cbc',
          passphrase: ''
       }
    });
    return {"publicKey":keyPair.publicKey,"privateKey":keyPair.privateKey}
 }



 // Encrypting the pased string
function encryptString (plaintext, publicKey) { 
    // Encrypting data using publicEncrypt() method and a public key
    const encrypted = crypto.publicEncrypt(
       publicKey, Buffer.from(JSON.stringify(plaintext)));
 
    return encrypted.toString("base64");
 }
 
 // Decrypting the passed string with private Key
 function decryptString (ciphertext, privateKey) { 
    // Decrypting data using privateDecrypt() method
    // and the corresponding private key
    const decrypted = crypto.privateDecrypt(
       {
          key: privateKey,
          passphrase: '',
       },
       Buffer.from(ciphertext, "base64")
    );
    return JSON.parse(decrypted.toString("utf8"));
 }


 module.exports = {encrypt,decrypt,generateKeyFiles,encryptString,decryptString}