const PropertyModel = require('../Models/Property');
const UsersModel = require('../Models/Accounts');
const PurchaseModel=require('../Models/Purchase');
const propertyService = require('../Services/Property');

module.exports.MakeNewPayment = async (propertInfo)=>{
    try{
        const Payment = new PurchaseModel({
            PaymentMethod: propertInfo.PaymentMethod,
            Status: propertInfo.Status,
            description: propertInfo.Description,
            PaidAmount: propertInfo.Available,
            UserID: propertInfo.UserID
        });
        const createdPayment = await Payment.save();
        return createdPayment;
    }catch(err){
        throw new Error('Could not make Payment');
    }
};

module.exports.EditPurchase = async (userId) => {
    try {
      await PropertyModel.Edit({_id: userId });
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
