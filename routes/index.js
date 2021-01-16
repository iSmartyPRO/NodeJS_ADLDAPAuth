const config = require('dotenv').config().parsed
const router = require('express').Router()
const controller = require('../controllers/index')
const {withJWTAuthMiddleware} = require('express-kun')

const protectedRouter = withJWTAuthMiddleware(router, config.JWT_TOKEN_SECRET_KEY)

protectedRouter.get('/', controller.index)

module.exports = router