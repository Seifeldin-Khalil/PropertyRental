const { request } = require('express');
const AccountService = require('../Services/Account');

module.exports.deleteUser = async (req,res) => {
    const userId = req.params.userId;
    try{
        await AccountService.deleteUser(userId);
        res.send({
            msg: 'User deleted successfully.'
        });} 
        catch (err){
            return res.status(500).send({
                error: err.message
            });
        }
};

module.exports.postUser = async(req, res)=>{
    const userInfo = {
        Name: req.body.Name,
        Username: req.body.Username,
        Password: req.body.Password
    };
    try{
        console.log(userInfo);
        const createdUser = await AccountService.createUser(userInfo);
        return res.status(201).send({
            msg: 'User created successfully',
            userId: createdUser._id
        });
    }catch(err){
        return res.status(500).send({
            error: err.message
        });
    }
};