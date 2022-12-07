const { request } = require('express');

const Purchase = require('../Services/Purchase');
const propertyService = require('../Services/Property');


module.exports.postPayment = async(req, res)=>{
    const propertyInfo = {
        PaymentMethod: req.body.PaymentMethod,
        Status: req.body.Status,
        description: req.body.Description,
        PaidAmount: req.body.Available,
        UserID: '6390bd9d7ff8b9938cd0a596'
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

module.exports.EditPurchase = async (req,res) => {
    const userId = req.params.userId;
    try{
    await Purchase.EditPurchase(userId);
    res.send({
        msg: 'Purchase updated successfully.'
    });}
    catch (err) {
        return res.status(500).send({
            error: err.message
        });
    }
};

module.exports.validatPurchase = async (req,res) => {
    try{
        const Idpurchase = await Purchase.find(req.params.PurchaseId);
        console.log(Idpurchase.Pending);
        const propertyUp = {
            Pending: !req.Pending
        }
        const validatPurchase = await Purchase.find(Idpurchase,propertyUp);
        res.send({
            msg: 'Purchase validated successfully.'});
    }catch (err){
        return res.status(500).send({
            error: err.message
        });
    }
};

  