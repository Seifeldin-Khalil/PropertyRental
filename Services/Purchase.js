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
            Price: new ObjectId(propertInfo.Price),
            UserID: propertInfo.UserID
        });
        const createdPayment = await Payment.save();
        return createdPayment;
    }catch(err){
        throw new Error('Could not create Property');
    }
};
// takes property and returns the Available
module.exports.MarkUnAvailable = async (property, Availability) =>{ 
    try{
        const Availability = await PropertyModel.findByIdAndUpdate(property._id,Availability);
        return Availability;
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
