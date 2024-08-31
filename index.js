var express = require("express");
var app = express();

app.get("/", function (req, res) {
    res.send("Hello Worlxxxxd!");
});
app.get("/rakesh", function (req, res) {
    res.send("Welcome Rakesh Kumar");
}); 

app.listen(process.env.PORT, () => { console.log("listening"); });
