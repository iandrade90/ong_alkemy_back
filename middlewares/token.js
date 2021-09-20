const tokenExists = (req, res, next) => {
    const token = req.header("Authorization")
    if (token) {
        req.token = token
        next()
    }else res.status(400).json("Missing token")
}

module.exports = {
    tokenExists
}