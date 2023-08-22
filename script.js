const {encrypt,decrypt,generateKeyFiles,encryptString,decryptString}= require("encrypt-decrypt-api")

let keys = generateKeyFiles(); // public key and private key

//console.log(generateKeyFiles().publicKey);
const encrypted = encryptString({ firstName: "test" }, keys.publicKey);

const deciphertext = decryptString(encrypted, keys.privateKey);


console.log(deciphertext);