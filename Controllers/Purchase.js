const { request } = require('express');

const Purchase = require('../Services/Purchase');
const propertyService = require('../Services/Property');

//makes the new payment
module.exports.postPayment = async(req, res)=>{
    const propertyInfo = {
        PaymentMethod: req.body.PaymentMethod,
        Status: req.body.Status,
        Description: req.body.Description,
        PaidAmount: req.body.Available,
        UserID: '6390bd9d7ff8b9938cd0a596'
    };
    try{
        console.log(propertyInfo);
        const createdPayment = await Purchase.MakeNewPayment(propertyInfo);

        const Idproperty = await Purchase.findPropertybyID(req.params.propertyId);
        const propertyUp = {
            Available: false
        }
        const Validatedproperty = await Purchase.validateProperty(Idproperty,propertyUp);
        res.send({
            msg: 'Property validated successfully.'});
        return res.status(201).send({
            msg: 'Payment added successfully',
            paymentID: createdPayment._id
        });
        
    }catch(err){
        return res.status(500).send({
            error: err.message
        });
    }
};

module.exports.validatePurchase = async (req,res) => {
    try{
        const Idpurchase = await Purchase.find(req.params.PurchaseId);
        console.log(Idpurchase.Pending);
        const propertyUp = {
            Pending: !req.Pending
        }
        const validatPurchase = await Purchase.find(Idpurchase,propertyUp);
        res.send({
            msg: 'Purchase validated successfully.'});
    }catch(err){
        return res.status(500).send({
            error: err.message
        });
    }
};

// sets available by true, might be removed
module.exports.ChangeAvail = async (req,res) => {
    try{
        const Idproperty = await Purchase.findPaymentbyID(req.params.propertyId);
        const propertyUp = {
            Available: false
        }
        const Validatedproperty = await Purchase.changeAvail(Idproperty,propertyUp);
        res.send({
            msg: 'Property validated successfully.'});
    }catch (err){
        return res.status(500).send({
            error: err.message
        });
    }
};
  
module.exports.MarkUnAvailable = async (req,res) => {
    try{
        const Idproperty = await AdministrationService.findPropertybyID(req.params.propertyId);
        const Availability = {
            Available: false
        }
        const UnAvailable = await AdministrationService.MarkUnAvailable(Idproperty,Availability);
        res.send({
            msg: 'Property changed successfully.'});
    }catch (err){
        return res.status(500).send({
            error: err.message
        });
    }
};