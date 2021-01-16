const config = require('dotenv').config().parsed
const jwt = require('jsonwebtoken')

module.exports.login = (req, res) => {
    console.log(config.JWT_TOKEN_SECRET_KEY)
    const token = "Bearer " + jwt.sign(
            {username: req.user.sAMAccountName}, 
            config.JWT_TOKEN_SECRET_KEY, 
            {expiresIn: config.JWT_TOKEN_EXPIRE}
        )
    res.status(200).json({
        token
    })
}

module.exports.secret = (req, res) => {
    console.log(req.res.locals.decoded.username)
    res.status(200).json({
        smth: 'lalala'
    })
}