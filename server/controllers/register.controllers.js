const bcryptjs = require('bcryptjs');
const jwt = require("jsonwebtoken");
const sequelize = require('../ddbb/sql/index');
const UserModel = require('../ddbb/sql/models/User');
const sendemail = require('../controllers/email.controllers');


const Register = {
    register: async (req, res) => {
        try {
            
            var passHash = await bcryptjs.hash(req.body.pass, 8)
            let newUser = {
                name_: req.body.name_,
                email: req.body.email,
                pass: passHash,
                role: req.body.role, 
            }
            UserModel.create(newUser)
                .then((data) => { res.json({ mensaje: true }) })
                .catch(err => {
                    if (err) {
                        console.log(err)
                        res.json({ mensaje: false })
                    }
                })

        } catch (error) {
            res.json({mensaje: false})
            console.log(error)
        }
    },
    signup: async (req, res) => {

        try {
            const token = jwt.sign({ email: req.body.email }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' })
            console.log(token)
            await sendemail.emailToRegister(token, req.body.email);
            res.json({ mensaje: `Email enviado a ${req.body.email}` });

        } catch (error) {
            res.json({ mensaje: false })

        }
    },
    emailChecker: async (req, res) => {
        jwt.verify(req.body.token, process.env.JWT_SECRET_KEY, (error, email) => {
            if (error) { res.json({ mensaje: false }) } else {
                res.json({ mensaje: true, email: email.email })
            }
        });
    }


}


module.exports = { Register }