const { DataTypes} = require('sequelize');
const sequelize = require('../index');

const UserModel = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name_: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },

    pass: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
    role: {
        type: DataTypes.STRING,
        allowNull: true
    }
   
}, {
    timestamps: false
});

module.exports = UserModel