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
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        status: req.body.status
    };
    try{
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

module.exports.DeleteProperty = async(req, res) => {
    const ID = req.params.ID;
    try{
        await DeleteProperty(ID);
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
    const ID = req.params.ID;
    try{
        await EditProprty(ID);
        res.send({
            msg: 'Edits are updated to the property'
        })
    }catch(err){
        return res.status(500).send({
            error:err.message
        });
    }
};