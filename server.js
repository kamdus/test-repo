const hbs = require("hbs");
const express = require("express");

let app = express();

hbs.registerPartials(__dirname + "/views/partials")

app.set("view engine", "hbs");


app.get("/", (req, res)=> {
	res.render("home.hbs", {
		title: "title ",
		copyright: new Date().getFullYear()

	});
})


app.get("/about", (req, res)=> {
	res.render("about.hbs", {
		title: "hello in about site",
		copyright: new Date().getFullYear()
	});
})



app.listen(3000);