const jwt = require('jsonwebtoken');
const trade_secret = "MY_SECRET_KEY"
const IsUserAuth = (req, res, next) => {

    const inputToken = req.header('Authorization');
    if (!inputToken) {
        return res.status(400).json({ errors: 'Token is not available' });
    } else if (inputToken) {
        const token = inputToken.split(' ')[1];
        jwt.verify(token, trade_secret, (error, result) => {
            if (error) {
                return res.status(403).json({ error: "Session expired" });
            }
            req.name = result.name;
            req.mobilenumber = result.mobilenumber;
            req.password = result.password
            next();
        });
        console.log(req.name);
        console.log(req.mobilenumber);
        console.log(req.password)

    }

};


module.exports = IsUserAuth;

