const router = require("express").Router();
const Logincontroller = require('../controllers/login.controllers')
const RegisterController = require('../controllers/register.controllers')
const UserController = require('../controllers/user.controllers')

const jwt = require("jsonwebtoken");

//login - signin - register - recover password
router.post("/recover-pass", Logincontroller.Login.recover)
router.post("/change-pass", Logincontroller.Login.change_pass)
router.post("/login", Logincontroller.Login.login)

router.post("/sign-up", RegisterController.Register.signup)
router.post("/check-email", RegisterController.Register.emailChecker)
router.post("/register", RegisterController.Register.register)

//User
router.post("/get_user", UserController.User.getUser)
router.post("/get_users", UserController.User.getUsers)
router.post("/get_current_user", UserController.User.getCurrentUser)
router.get("/test", UserController.User.test)


module.exports = router;