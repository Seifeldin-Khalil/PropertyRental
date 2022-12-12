const PropertyModel = require ('../Models/Property');
const UsersModel = require('../Models/Accounts');
const axios = require ('axios');
module.exports.findAllProperties = async () => {
    try{
        const pending = await PropertyModel.find({ Pending: 'false', Available: 'true', Paid: 'false'});
        //find not pending
        console.log(pending);
        return pending;

    }catch (err){
        throw new Error ('Could not retreive properties');
    }
};

module.exports.findMyProperties = async(userId)=>{
    try{
        const pending = await PropertyModel.find({UserID:userId});
        //find not pending
        console.log(pending);
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
            Pending: propertInfo.Pending,
            Paid: propertInfo.Paid,
            UserID: propertInfo.UserID,
            ImgURL: propertInfo.ImgURL
        });
        const addprop = await UsersModel.findByIdAndUpdate({_id:property.UserID}, {$push:{Properties:property._id}});
        const confirmation = await UsersModel.findById({_id:property.UserID});
        const data = {
            Name: property.Name,
            Description: property.Description,
            Price: property.Price,
            Email: confirmation.Email
        }
        axios.post(process.env.CONFIRMATION, data);
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
    catch(err){
        throw new Error ('Error while finding property')
    }
};