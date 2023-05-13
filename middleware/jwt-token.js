const jwt = require('jsonwebtoken');
const secret = 23212;
const TokenVerify = (req, res, next) => {

    const inputToken = req.header('Authorization');

    if (!inputToken) {
        return res.status(400).json({ errors: 'Token is not available' });

    } else if (inputToken) {
        const token = inputToken.split(' ')[1];

        jwt.verify(token, secret, (error, result) => {

            if (error) {
                return res.status(403).json({ error: "Unauthorized" });
            }

            console.log('result.userId', result.userId)
            req.userId = result.userId;
            req.emailId = result.emailId;
            next();
        })
    }
};

module.exports = TokenVerify;