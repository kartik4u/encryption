var CryptoJS = require("crypto-js");


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



module.exports = {encrypt,decrypt}