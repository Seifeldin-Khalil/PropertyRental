const { request } = require('express');

const Purchase = require('../Services/Purchase');
const propertyService = require('../Services/Property');
const { isObjectIdOrHexString } = require('mongoose');

//makes the new payment
module.exports.postPayment = async(req, res)=>{
    const propertyInfo = {
        PaymentMethod: req.body.PaymentMethod,
        Status: req.body.Status,
        Description: req.body.Description,
        Price: req.body.Price,
        UserID: '6390de72861a1a1d8f7ee7dd'
    };
    try{
        console.log(propertyInfo);
        const createdPayment = await Purchase.MakeNewPayment(propertyInfo);
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

// sets available by true, might be removed
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