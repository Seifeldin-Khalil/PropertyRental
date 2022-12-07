const { request } = require('express');
const propertyService = require ('../Services/Property');

module.exports.getproperties = async (req, res) =>{
    try{
        const properties = await propertyService.findAllProperties();
        res.send({properties});
    }catch (err){
        res.status (500);
        res.send({
            error:err
        });
    }
};

module.exports.postProperty = async(req, res)=>{
    const propertInfo = {
        Name: req.body.Name,
        Description: req.body.Description,
        Price: req.body.Price,
        Available: false,
        Pending: req.body.Pending
    };
    try{
        console.log(propertInfo);
        const createdProperty = await propertyService.addNewProperty(propertInfo);
        return res.status(201).send({
            msg: 'Property added successfully',
            propertyId: createdProperty._id
        });
    }catch(err){
        return res.status(500).send({
            error: err.message
        });
    }
};

module.exports.deleteProperty = async (req,res) => {
    const propertyId = req.params.propertyID;
    try{
    await propertyService.removeProperty(propertyId);
    res.send({
        msg: 'Property deleted successfully.'
    });}
    catch (err) {
        return res.status(500).send({
            error: err.message
        });
    }
};

module.exports.EditProprty = async(req, res) => {
    
    try{
        const edit = await propertyService.findPropertybyID(req.params.propertyID);
        const availibilty = {
            Name: req.body.Name,
            Description: req.body.Description,
            Price: req.body.Price
        }
        const EditProprty = await propertyService.EditProprty(edit,availibilty)
        res.send({
            msg: 'Edits are updated to the property'
        })
    }catch(err){
        return res.status(500).send({
            error:err.message
        });
    }
};
