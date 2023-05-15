const AllModels = require('../utils/allModels')

const isUserExist = async (req, res, next) => {
    mobilenumber = req.body.mobilenumber
    password = req.body.password

    whereClause = {}

    if (mobilenumber) whereClause.mobilenumber = mobilenumber
    else if (password) whereClause.password = password

    let user = await AllModels.user_Model.findOne({
        where: whereClause
    })

    if (!user) return res.status(401).json({ error: 'User is not Registered' })
    else req.is_user_exist = true
    req.userData = user
    next()
}

module.exports = isUserExist