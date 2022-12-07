const PropertyModel = require ('../Models/Property');

module.exports.findAllProperties = async () => {
    try{
        const pending = await PropertyModel.find({ Pending: 'false'});
        //find not pending
        return pending;

    }catch (err){
        throw new Error ('Could not retreive properties');
    }
};

module.exports.addNewProperty = async (propertInfo)=>{
    try{
        const property = new PropertyModel({
            Name: propertInfo.Name,
            Description: propertInfo.Description,
            Price: propertInfo.Price,
            Available: propertInfo.Available,
            Pending: propertInfo.Pending
        });
        const createdProperty = await property.save();
        return createdProperty;
    }catch(err){
        throw new Error('Could not create Property');
    }
};

module.exports.removeProperty = async (propertyID) => {
    try {
      await PropertyModel.deleteOne({ _id: propertyID });
    } catch (err) {
      throw new Error('Could not remove property.');
    }
};

module.exports.EditProprty = async(property, up)=>{
    try{
        const editted = await PropertyModel.findByIdAndUpdate(property._id, up);
        return editted;
    }catch(err){
        throw new Error('Unable to update');
    }
}

module.exports.findPropertybyID = async (propertyID) => {
    try{
        const property = await PropertyModel.findById({_id:propertyID});
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