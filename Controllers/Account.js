const { request } = require('express');

const Account = require('../Services/Account');

module.exports.editAccount = async (req,res) => {
   const userId = req.params.userId;
    try{
    await Account.editAccount(userId);
    res.send({
        msg: ' Updated successfully.'
    });}
    catch (err) {
        return res.status(500).send({
            error: err.message
        });
    }
};
module.exports.deleteAccount = async (req,res) => {
    const userId = req.params.userId;
    try{
    await Account.removeAccount(userId);
    res.send({
        msg: 'Account is deleted successfully.'
    });}
    catch (err) {
        return res.status(500).send({
            error: err.message
        });
    }
};
module.exports.viewPurchase = async (req,res) => {
    try{
    const PurchaseId = await Account.viewPurchase();
    return res.send({PurchaseId});
    } catch (err) {
    res.status(500);
    return res.send({ error: err.message});
    }
};
//Signup and login 