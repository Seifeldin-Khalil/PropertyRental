/*const { request } = require('express');
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

module.exports.postUser = async (req, res) => {
    try {
      const userInfo = {
        Username: req.body.Username,
        Password: req.body.Password,
        Name: req.body.Name
      };
  
      const userExists = await Account.doesUserExist(userInfo.Username);
      if (userExists) {
        return res.status(422).send({
          error: ' same username already exists.'
        });
      }
  
      await Account.createUser(userInfo);
    } catch (error) {
      res.status(500).send({
        error: error.message
      });
    }
  };




module.exports.postLogin = async (req, res) => {
    const { username, password } = req.body;
    try {
      const user = await Account.checkCredentials(username, password);
  
      if (!user) {
        return res.status(401).send({
          error:
            'Invalid, please enter the correct username and password.'
        });
      }
  
      const jwt = await Account.generateJWT(user);
      res.send({
        userId: user._id,
        username: user.Username,
        jwt: jwt,
        message: 'Logged in successfully.'
      });
    } catch (err) {
      res.status(500).send({
        error: error.message
      });
    }
  };*/