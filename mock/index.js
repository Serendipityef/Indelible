<<<<<<< HEAD
const express = require("express");
const app = express();
const router = require("./router")
const debug = require("debug")("my-application")
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use("",router);

app.listen(3000,function(){
    debug("服务器运行在3000端口上");
=======
const express = require("express");
const app = express();
const router = require("./router")
const debug = require("debug")("my-application")
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use("",router);

app.listen(3000,function(){
    debug("服务器运行在3000端口上");
>>>>>>> 87822c509980302f81671397ac6e0c6d4685f535
})