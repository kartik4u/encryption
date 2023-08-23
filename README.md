# encryption


# crypto.js

```ruby

const {encrypt,decrypt}= require("encrypt-decrypt-api")

encrypt({ firstName: "test" },PrivateKey);

decrypt("U2FsdGVkX1/3fLFzthsfPEqpuB+SrTY6XapIoiDI8xc=",PrivateKey)

```

# crypto 

```ruby

const {encrypt,decrypt,generateKeyFiles,encryptString,decryptString}= require("encrypt-decrypt-api")

let keys = generateKeyFiles(); // public key and private key

const encrypted = encryptString({ firstName: "test" }, keys.publicKey);

const deciphertext = decryptString(encrypted, keys.privateKey);

```
