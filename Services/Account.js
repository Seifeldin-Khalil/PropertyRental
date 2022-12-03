const PropertyModel = require ('../Models/Property');
const UserModel = require('../models/User');

module.exports.UpdateAccount = async () => {
    try{
        const Account = await PropertyModel.find();
        return Account;

    }catch (err){
        throw new Error ('error in updating');
    }
};

module.exports.editAccount = async (userId) => {
    try {
      await PropertyModel.Edit({id: userId });
    } catch (err) {
      throw new Error('Could not edit Account.');
    }
};



module.exports.deleteAccount = async (userId)=>{
    try{
        await PropertyModel.delete({_id:userId});
    }catch(err){
        throw new Error('Could not delete account');
    }
};
    


module.exports.viewpurchase = async () => {
    try{
       const purchase = await PropertyModel.view({ purchase: 'true'});
       return purchase;
    } catch (err) {
        throw new Error ('Could not view purchase');
    }
};

module.exports.createUser = async (userInfo) => {
  try {
    let hashedPassword = await bcrypt.hash(userInfo.password, 12);

    const newUser = new UserModel({
      username: userInfo.username,
      password: hashedPassword,
      name: userInfo.name
    });

    await newUser.save();
  } catch (err) {
    throw new Error('Error creating new user');
  }
};

module.exports.doesUserExist = async (username) => {
  const existingUser = await UserModel.findOne({
    username: username
  });

  if (existingUser) {
    return true;
  } else {
    return false;
  }
};