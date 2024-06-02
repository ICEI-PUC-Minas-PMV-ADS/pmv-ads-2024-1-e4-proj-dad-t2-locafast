const jwt = require('jsonwebtoken')
const util = require('util');

const httpStatus = require('../constants/httpstatus')
const AuthException = require('../../exceptions/authException')

const promisify = util.promisify;

const emptySpace = " "

module.exports = async (req, res, next) => {
    try {
        const { authorization } = req.headers
        if (!authorization) {
            throw new AuthException(httpStatus.UNAUTHORIZED, "Acess token was not informed.")
        }
        let acessToken = authorization
        if (acessToken.includes(emptySpace)) {
            acessToken = acessToken.split(emptySpace)[1]
        } else {
            acessToken = authorization
        }
        const decoded = await promisify(jwt.verify)(
            acessToken,
            "YXV0aC1hcGktc2VjcmV0LWRldi0xMjM0NTY="
        )
        req.authUser = decoded.authUser
        return next()
    } catch (error) {
        const status = error.status ? error.status : httpStatus.INTERNAL_SERVER_ERROR
        return res.status(status).json({ status, message: error.message, })
    }
}
