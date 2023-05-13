const sequelize = require('sequelize')
const dbConnection = require('../utils/dbConnection')

const users = dbConnection.define('user',{
    name :{
        type : sequelize.STRING,
    },
    mobilenumber:{
        type : sequelize.INTEGER,
        allowNull : true,
    },
    password:{
        type : sequelize.STRING,
        allowNull:true
    },
    Dateofbirth:{
        type : sequelize.DATE,
        allowNull:true
    },
    Gender:{
        type : sequelize.ENUM('Male', 'Female','Other'),
        allowNull:true
    }
})
module.exports = users;