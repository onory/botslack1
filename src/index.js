
const app = require ('./app');

async function main(){
    await app.listen(app.get('port'));
    console.log('escuchando',app.get('port'));
}


require = require("esm")(module/*, options*/)
module.exports = require("./app.js")


main();