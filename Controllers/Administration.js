const { request } = require('express');
const AdministrationService = require('../Services/Administration');

module.exports.deleteProperty = async (req,res) => {
    const propertyId = req.params.propertyId;
    try{
     await AdministrationService.removeProperty(propertyId);
     const viewpending = await AdministrationService.viewPending();
    res.send({
        viewpending,
        msg: 'Property deleted successfully.'
    });}
    catch (err) {
        return res.status(500).send({
            error: err.message
        });
    }
};

module.exports.banUser = async (req,res) => {
    const userId = req.params.userId;
    try{
        await AdministrationService.banUser(userId);
        const users = await AdministrationService.findAllUsers();
        res.send({
            users,
            msg: 'User banned successfully.'
        });} 
        catch (err){
            return res.status(500).send({
                error: err.message
            });
        }
};
module.exports.getUsers = async (req, res) =>{
    try{
        const users = await AdministrationService.findAllUsers();
       return res.status(201).send({ 
      users,
      msg: "users got successfully."
    });
    }catch (err) {
    return res.status(500).send({error: err.message});
  }
};

module.exports.viewPending = async (req,res) => {
    try{
    const properties = await AdministrationService.viewPending();
    return res.send({properties});
    } catch (err) {
    res.status(500);
    return res.send({ error: err.message});
    }
};

module.exports.validateProperty = async (req,res) => {
    try{
        const Idproperty = await AdministrationService.findPropertybyID(req.params.propertyId);
        const propertyUp = {
            Pending: !Idproperty.Pending,
            Available: true
        }
        const Validatedproperty = await AdministrationService.validateProperty(Idproperty,propertyUp);
        return res.send({ Validatedproperty,
            msg: 'Property validated successfully.'});
        
    }catch (err){
        return res.status(500).send({
            error: err.message
        });
    }
};
