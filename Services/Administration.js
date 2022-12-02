const PropertyModel = require('../Models/Property');

module.exports.removeProperty = async (propertyID) => {
    try {
      await PropertyModel.deleteOne({ _id: propertyID });
    } catch (err) {
      throw new Error('Could not remove property.');
    }
};

module.exports.banUser = async (userName) => {
    try{
        await PropertyModel.deleteOne({ username: userName});
    } catch (err) {
        throw new Error ('Could not ban user');
    }
};

module.exports.viewPending = async () => {
    try{
       const pending = await PropertyModel.find({ Available: 'true'});
       return pending;
    } catch (err) {
        throw new Error ('Could not view pending');
    }
};