const { request } = require('express');
const Purchase = require('../Services/Purchase');
const propertyService = require('../Services/Property');
const { isObjectIdOrHexString } = require('mongoose');

//makes the new payment
module.exports.postPayment = async(req, res)=>{
    const ID = '6390bd9d7ff8b9938cd0a596';
    const price =await propertyService.findPropertybyID(ID);
    const propertyInfo = {
        PaymentMethod: req.body.PaymentMethod,
        Status: req.body.Status,
        Description: req.body.Description,
        Price: price.Price,
        UserID: ID
    };
    console.log(price);
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

module.exports.RefundPayment = async (req,res) => {
    const paymentID = req.params.paymentID;
    try{
    await Purchase.RefundPurchase(paymentID);
    res.send({
        msg: 'Purchase refunded, Money will be back in your account in 14 days'
    });}
    catch (err) {
        return res.status(500).send({
            error: err.message
        });
    }
};

// sets available by true, might be removed
module.exports.MarkUnAvailable = async (req,res) => {
    try{
        const edit = await propertyService.findPropertybyID(req.params.propertyID);
        const Availability = {
            Available: false
        }
        const UnAvailable = await Purchase.MarkUnAvailable(edit,Availability);
        res.send({
            msg: 'Property changed successfully.'});
    }catch (err){
        return res.status(500).send({
            error: err.message
        });
    }
};