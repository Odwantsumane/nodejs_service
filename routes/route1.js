const express = require('express');
const router = express.Router();
const axios = require('axios');
const USERS_REST_API_URL = 'http://127.0.0.1:7800/test';

// export
module.exports = router;

const DB = [];

router.get("/all", (req, res) => {
    res.send(DB)
    // res.render("displayAll", { db: DB, success: false, db2: `${DB.toString()}`});
})

router.get("/add", (req, res) => {
    res.render("index", { ax: axios})
})

router.post("/add", (req, res) => {
    // first will get data from the broker
    var data = {
        "id":  req.body.id,
        "username": req.body.username,
        "email": req.body.email,
        "country": req.body.country,
        "continent":  req.body.continent,
        "race": req.body.race,
        "empTodos": req.body.todos
    }
    
    try {
        DB.push(data);
        // console.log(DB);
    } catch (err) {
        res.status(500).json({ message: err });
    }
    res.send(DB);
    // res.render("displayAll", { success: "data uploaded successfully", db: DB, db2: `${DB.toString()}` })
})

router.post("/addXml", (req, res) => {
    // first will get data from the broker
    
    try {
        axios.post(USERS_REST_API_URL,{username: req.body.username, email: req.body.email})
        .then(
            function(response) {
                res.render("displayAll", { success: "data uploaded successfully", db: DB, db2: `${DB.toString()}` })
            }).catch(function(error)
            {
                res.status(401).json({ message: error})
            });
            
    } catch (err) {
        res.status(500).json({ message: err });
    }
})

 