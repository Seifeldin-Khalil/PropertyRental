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
    const propertInfo ={
        Name: req.body.Name,
        Description: req.body.Description,
        Price: req.body.Price,
        Available: req.body.Available,
        Pending : req.body.Pending
    };
    try{
        const createdProperty = await propertyService.addNewProperty(propertInfo);
        console.log(createdProperty); 
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

module.exports.DeleteProperty = async(req, res) => {
    const ID = req.params.ID;
    try{
        await propertyService.DeleteProperties(ID);
        res.send({
            msg: 'Property deleted successfully'
        })
    }catch(err){
        return res.status(500).send({
            error:err.message
        });
    }
};

module.exports.EditProprty = async(req, res) => {
    
    try{
        const edit = await propertyService.findPropertybyID(request.params.ID);
        const availibilty = {
            Available: !req.Available
        }
        const EditProprty = await propertyService.EditProprty(edit, availibilty)
        res.send({
            msg: 'Edits are updated to the property'
        })
    }catch(err){
        return res.status(500).send({
            error:err.message
        });
    }
};
