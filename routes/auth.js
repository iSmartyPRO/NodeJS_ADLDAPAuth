const config = require('dotenv').config().parsed
const router = require('express').Router()
const controller = require('../controllers/auth')
const passport = require('passport')
const {withJWTAuthMiddleware} = require('express-kun')

const protectedRouter = withJWTAuthMiddleware(router, config.JWT_TOKEN_SECRET_KEY)

router.post('/auth/login',  passport.authenticate('ldapauth', {session: false}), controller.login)
protectedRouter.get('/auth/secret', controller.secret)



module.exports = router