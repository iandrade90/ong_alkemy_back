const { decryptToken } = require("../services/tokenService")

const tokenExists = (req, res, next) => {
    
    const data = decryptToken(req.header("Authorization")?.split(" ")[1])

    if (data) {
        req.data = data
        next()
    }else res.status(400).json("Missing token")
}

module.exports = {
    tokenExists
}