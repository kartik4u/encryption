# encryption with Private key

```ruby

const {encrypt,decrypt}= require("encrypt-decrypt-api")

let PrivateKey="my-private-key"; // user defined

const encrypted = encrypt({ firstName: "test" },PrivateKey);

const deciphertext = decrypt("U2FsdGVkX1/3fLFzthsfPEqpuB+SrTY6XapIoiDI8xc=",PrivateKey)


---------FRONTEND---------------

import {encrypt,decrypt} from "encrypt-decrypt-api"

const encrypted = encrypt({ firstName: "test" }, PrivateKey);

const deciphertext = decrypt(encrypted, PrivateKey);

```

# encryption with public and Private key

```ruby

const {encrypt,decrypt,generateKeyFiles,encryptString,decryptString}= require("encrypt-decrypt-api")

let keys = generateKeyFiles(); // public key and private key

const encrypted = encryptString({ firstName: "test" }, keys.publicKey);

const deciphertext = decryptString(encrypted, keys.privateKey);

```
