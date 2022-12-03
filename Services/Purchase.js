const PropertyModel = require('../Models/Property');
const UsersModel = require('../Models/Accounts');

module.exports.MakePayment = async (userId) => {
    try{
        await UsersModel.Make({ _id: userId});
    } catch (err) {
        throw new Error ('Not Paid');
    }
};

module.exports.EditPurchase = async (userId) => {
    try {
      await PropertyModel.Edit({id: userId });
    } catch (err) {
      throw new Error('Could not edit Purchase.');
    }
};



module.exports.validatePurchase = async (Purchase, Status) =>{
    try{
        const purchase = await PropertyModel.find(Purchase._id,Status);
        return purchase;
    } catch (error){
        throw new Error ('Not Valid');
    }
};
