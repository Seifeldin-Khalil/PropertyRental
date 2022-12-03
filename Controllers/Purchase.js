const { request } = require('express');

const Purchase = require('../Services/Purchase');
module.exports.MakePayment = async (req,res) => {
   const userId = req.params.userId;
    try{
    await Purchase.MakePayment(userId);
    res.send({
        msg: ' paid successfully.'
    });}
    catch (err) {
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
