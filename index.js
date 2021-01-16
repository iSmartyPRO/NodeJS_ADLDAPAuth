const config = require('dotenv').config().parsed
const express = require('express')
const passport = require('passport')
const morgan = require('morgan')
const LdapStrategy = require('passport-ldapauth')
const app = express()
const indexRoutes = require('./routes/index')
const authRoutes = require('./routes/auth')

const LdapOpts = {
    server: {
        url: config.LDAP_SERVER,
        bindDN: config.LDAP_BIND_DN,
        bindCredentials: config.LDAP_BIND_CREDENTIALS,
        searchBase: config.LDAP_SEARCHBASE,
        searchFilter: config.LDAP_SEARCHFILTER
    }
}
passport.use(new LdapStrategy(LdapOpts))

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(morgan())

// Routes
app.use('/', indexRoutes)
app.use('/api/', authRoutes)


app.listen(config.PORT, () => { console.log(`Server is running on port ${config.PORT}`)})