const express = require('express');
const app = express();
const router = require("./routes/route1");
const xml = require('xml2js');
const bodyParser = require('body-parser');
const xmlparser = require('express-xml-bodyparser');
const cors = require('cors');
 

//access to the request body
// middleware
app.use(express.urlencoded({ extended: false}))
app.use(express.json());
app.use(xmlparser());
app.use(cors());
 
// set view engine (converts ejs to html)
app.set('view engine', 'ejs')

app.use("/employee", router);

app.get("/", (req, res) => {
    res.render("welcome", {});
})

app.listen(4000, () => {
    console.log(`server is running: http://localhost:4000`);
})

