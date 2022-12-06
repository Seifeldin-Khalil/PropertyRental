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
            Name : propertInfo.Name,
            Description : propertInfo.Description,
            Price : propertInfo.Price,
            Available: propertInfo.Available,
            Pending : propertInfo.Pending
        });
        const createdProperty = await property.save();
        return createdProperty;
    }catch(err){
        throw new Error('Could not create Property');
    }
};

module.exports.DeleteProperties = async (id)=>{
    try{
        await PropertyModel.deleteOne({_id:id});
    }catch(err){
        throw new Error('Deletion was not successful');
    }
};

module.exports.findPropertybyID = async (propertyID) => {
    try{
        const property = await PropertyModel.findById({ _id: propertyID});
        if(property){
            return property;
        }else{
            return false;
        }
    }
    catch(error){
        throw new Error ('Error while finding property')
    }
};

module.exports.EditProprty = async(property, Available)=>{
    try{
        const editted = await PropertyModel.findByIdAndUpdate(property._id, Available);
        return editted;
    }catch(err){
        throw new Error('Unable to update');
    }
}
