const app = require("./app");
const connect = require("./configs/db");
app.listen(4000, async function(){
    await connect();
    console.log("listening on port 2345");
    });