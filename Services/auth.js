const bcrypt = require('bcrypt');

const UserModel = require('../Models/Accounts');

module.exports.createUser = async (userInfo) => {
    try {
        let hashedPassword = await bcrypt.hash(userInfo.Password, 12);

        const newUser = new UserModel({
            Username: userInfo.Username,
            Password: hashedPassword,
            Name: userInfo.Name
        });
        await newUser.save();
    }catch(err) {
        throw new Error ('Error creating new user, please try again later.');
    }
    
};

module.exports.doesUserExist = async (username) => {
    const existingUser = await UserModel.findOne({
        Username: username
    });

    if (existingUser){
        return true;
    } else {
        return false;
    }
};