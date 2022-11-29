const AdministrationModel = require ('../Models/Administration');

module.exports.ViewPendingProperties = async () => {
    try{
        const property = await PropertyModel.find();
        return property;
    }
    catch (err){
        throw new Error ('Could not retrieve products');
    }
};