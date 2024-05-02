const crypto = require("node:crypto")

const start = Date.now()

// synchronous call 
crypto.pbkdf2Sync("password","salt",100000,512,"sha512");
crypto.pbkdf2Sync("password","salt",100000,512,"sha512");
crypto.pbkdf2Sync("password","salt",100000,512,"sha512");
console.log("Harsh: ",Date.now()-start);