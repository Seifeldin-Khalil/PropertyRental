const { request } = require('express');
const Purchase = require('../Services/Purchase');
const propertyService = require('../Services/Property');
const { isObjectIdOrHexString } = require('mongoose');

//makes the new payment
module.exports.postPayment = async(req, res)=>{
    try{
        const property = await propertyService.findPropertybyID(req.params.ID);
        const propertyInfo = {
            PaymentMethod: req.body.PaymentMethod,
            Price: property.Price,
            PropertyID: property._id,
            UserID: req.params.ID
        };
        console.log(property);
    }catch(err){
        return res.status(500).send({
            error: err.message
        });
    }

    const price =await propertyService.findPropertybyID(req.params.ID);
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

module.exports.findMyPendings = async (req, res) => {
    try{
        const mine = await Purchase.findMyPendings(req.params.userId);
        return res.status(201).send({ 
            mine
        });
    }catch (err) {
        return res.status(500).send({error: err.message});
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
module.exports.MarkPaid = async (req,res) => {
    try{
        const edit = await propertyService.findPropertybyID(req.params.propertyID);
        const Paid = {
            Paid: true
        }
        const paid = await Purchase.Markpaid(edit,Paid);
        res.send({
            msg: 'Property paid successfully.'});
    }catch (err){
        return res.status(500).send({
            error: err.message
        });
    }
};