const bcryptjs = require('bcryptjs');
const jwt = require("jsonwebtoken");

const UserModel = require('../ddbb/sql/models/User');

// const sendemail = require('../controllers/email.controller');

const User = {

    test: async (req, res) => {
      
        try {
            const user = await UserModel.findAll()
            console.log(user);
            res.json(user)
        } catch (error) {
            console.log(error)
            res.json({ mensaje: false })
        }
    }
,

    getUser: async (req, res) => {
        let token = req.body.token;
        let userName
        
        jwt.verify(token, process.env.JWT_SECRET_KEY, (error, user) => {
            if (error) {
                console.log("Error del token")
                res.json({ validation: false })
            } else {
                userName = user.user_name
                console.log("Token correcto")
            }
        })
        if (userName) {
            try {
                const user = await UserModel.findOne({ where: { user_id: req.body.id } })
                console.log(user);
                res.json({
                    about_me: user.about_me,
                    area: user.area,
                    country: user.country,
                    expert: user.expert,
                    gender: user.gender,
                    mother_tongue: user.mother_tongue,
                    pic: `http://cuevos3.westeurope.cloudapp.azure.com:3001/pics/${user.pic}`,
                    studies: user.studies,
                    support_type: user.support_type,
                    user_id: user.user_id,
                    user_name: user.user_name,
                    user_surname: user.user_surname,
                    years_in: user.user_surname,
                    email: user.email
                })
            } catch (error) {
                console.log(error)
                res.json({ mensaje: false })
            }
        }
    },
    
    getCurrentUser: async (req, res) => {
        let token = req.body.token;
        let userId
        jwt.verify(token, process.env.JWT_SECRET_KEY, (error, user) => {
            if (error) {
                console.log("Error del token")
                res.json({ mensaje: "token error" })
            } else {
                userId = user.id
                console.log("Token correcto")
            }
        })
        if (userId) {
            try {
                const user = await UserModel.findOne({ where: { id: userId } })
                console.log(user);
                res.json(user)
            } catch (error) {
                console.log(error)
                res.json({ mensaje: false })
            }
        }
    },
    getUsers: async (req, res) => {
        let token = req.body.token;
        let userName
        jwt.verify(token, process.env.JWT_SECRET_KEY, (error, user) => {
            if (error) {
                console.log("Error del token")
                res.json({ validation: false })
            } else {
                userName = user.user_name
                console.log("Token correcto")
            }
        })
        if (userName) {
            try {
                const users = await UserModel.findAll( {where: { country: 'Romania' } })
                console.log(users);
                let usersList = []
                users.map(user => {
                    usersList.push({
                        about_me: user.about_me,
                        area: user.area,
                        country: user.country,
                        expert: user.expert,
                        gender: user.gender,
                        mother_tongue: user.mother_tongue,
                        pic: `http://cuevos3.westeurope.cloudapp.azure.com:3001/pics/${user.pic}`,
                        studies: user.studies,
                        support_type: user.support_type,
                        user_id: user.user_id,
                        user_name: user.user_name,
                        user_surname: user.user_surname,
                        years_in: user.user_surname,
                        email: user.email
                    })
                })
                res.json(usersList)
            } catch (error) {
                console.log(error)
                res.json({ mensaje: false })
            }
        }
    }
}


module.exports = { User }