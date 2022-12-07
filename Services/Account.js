const PropertyModel = require ('../Models/Property');
const UsersModel = require('../Models/Accounts');

module.exports.deleteUser = async (userId) => {
    try{
        await UsersModel.deleteOne({_id: userId});
    } catch (err) {
        throw new Error ('Could not ban user');
    }
};

module.exports.createUser = async (userInfo) => {
    try{
        const user = new UsersModel({
            Name: userInfo.Name,
            Username: userInfo.Username,
            Password: userInfo.Password
        });
        const CreatedUser = await user.save();
        return CreatedUser;
    } catch(err){
        throw new Error('Could not create user');
    }
};
