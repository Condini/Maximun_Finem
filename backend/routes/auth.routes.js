// routes/auth.routes.js

const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const router = express.Router();
const userSchema = require("../models/User");


// Sign-in
router.post("/signin", (req, res, next) => {
    let getUser;
    userSchema.findOne({
        email: req.body.email
    }).then(user => {
        if (!user) {
            return res.send({
                message: "Usuário Inválido!",
                valid: false
            });
        }
        if(bcrypt.compare(req.body.password, user.password)){
            res.send({email: req.body.email, valid: true})
            return true
        }
        else{
            return res.send({
                message: "Usuário Inválido!",
                valid: false
            });

        }
    }).then(response => {
        if (!response) {
            return res.status(401).json({
                message: "Authentication failed"
            });
        }
    }).catch(err => {
        return res.status(401).json({
            message: "Authentication failed"
        });
    });
});

// Sign-up
router.post("/signup", (req, res, next) => {
    bcrypt.hash(req.body.password, 10).then((hash) => {
        const user = new userSchema({
            name: req.body.name,
            email: req.body.email,
            cpf: req.body.cpf,
            regis: req.body.regis,
            password: hash
        });
        user.save().then((response) => {
            res.status(201).json({
                message: "User successfully created!",
                result: response
            });
        }).catch(error => {
            res.status(500).json({
                error: error
            });
        });
    });
});

module.exports = router;