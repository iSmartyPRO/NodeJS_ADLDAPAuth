module.exports.index = (req, res) => {
    res.status(200).json({
        message: 'OK, This is index page'
    })
}