const PropertyModel = require ('../Models/Property');

module.exports.findAllProperties = async () => {
    try{
        const properties = await PropertyModel.find();
        return properties;

    }catch (err){
        throw new Error ('Could not retreive properties');
    }
};

module.exports.addNewProperty = async (propertInfo)=>{
    try{
        const property = new PropertyModel({
            name : propertInfo.name,
            description : propertInfo.description,
            price : propertInfo.price,
            status: propertInfo.status
        });
        const createdProperty = await property.save();
        return createdProperty;
    }catch(err){
        throw new Error('Could not create Property');
    }
};

module.exports.DeleteProperty = async (id)=>{
    try{
        await PropertyModel.deleteOne({_id:id});
    }catch(err){
        throw new Error('Deletion was not successful');
    }
};

module.exports.EditProprty = async(id)=>{
    try{
        await PropertyModel.updateOne({_id:id});
        
    }catch(err){
        throw new Error('Unable to update');
    }
}
