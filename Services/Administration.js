const PropertyModel = require('../Models/Property');
const UsersModel = require('../Models/Accounts');

module.exports.removeProperty = async (propertyID) => {
    try {
      await PropertyModel.deleteOne({ _id: propertyID });
    } catch (err) {
      throw new Error('Could not remove property.');
    }
};

module.exports.banUser = async (userId) => {
    try{
        await UsersModel.deleteOne({ _id: userId});
    } catch (err) {
        throw new Error ('Could not ban user');
    }
};

module.exports.findAllUsers = async () => {
    try{
        const users = await UsersModel.find();
        return users;

    }catch (err){
        throw new Error ('Could not retreive users');
    }
};

module.exports.viewPending = async () => {
    try{
       const pending = await PropertyModel.find({ Pending: 'true'});
       return pending;
    } catch (err) {
        throw new Error ('Could not view pending');
    }
};

module.exports.validateProperty = async (property, pStatus) =>{
    try{
        const Vproperty = await PropertyModel.findByIdAndUpdate(property._id,pStatus);
        return Vproperty;
    } catch (error){
        throw new Error ('Error while editing property');
    }
};

module.exports.findPropertybyID = async (propertyID) => {
    try{
        const property = await PropertyModel.findById({ _id: propertyID});
        if(property){
            return property;
        }else{
            return false;
        }
    }
    catch(error){
        throw new Error ('Error while finding property')
    }
};