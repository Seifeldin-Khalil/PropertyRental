const PropertyModel = require('../Models/Property');
const UsersModel = require('../Models/Accounts');
const PurchaseModel=require('../Models/Purchase');
const propertyService = require('../Services/Property');
const {ObjectId} = require("mongoose").Types;

//makes a payment enters a record in the table of payments
module.exports.MakeNewPayment = async (propertInfo)=>{ 
    try{
        const Payment = new PurchaseModel({
            PaymentMethod: propertInfo.PaymentMethod,
            Status: propertInfo.Status,
            Description: propertInfo.Description,
            Price: propertInfo.Price,
            UserID: propertInfo.UserID
        });
        const createdPayment = await Payment.save();
        return createdPayment;
    }catch(err){
        throw new Error('Could not create Property');
    }
};
// takes property and returns the Available
module.exports.MarkUnAvailable = async(property, avail)=>{
    try{
        const editted = await PropertyModel.findByIdAndUpdate(property._id, avail);
        return editted;
    }catch(err){
        throw new Error('Unable to update');
    }
}

module.exports.findPropertybyID = async (propertyID) => {
    try{
        const property = await PropertyModel.findById({_id:propertyID});
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

module.exports.RefundPurchase = async (paymentID) => {
    try {
      await PurchaseModel.deleteOne({ _id: paymentID });
    } catch (err) {
      throw new Error('Could not Refund, contact support.');
    }
};