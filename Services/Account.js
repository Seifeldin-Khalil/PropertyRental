const PropertyModel = require ('../Models/Property');

module.exports.UpdateAccount = async () => {
    try{
        const Account = await PropertyModel.find();
        return Account;

    }catch (err){
        throw new Error ('error in updating');
    }
};

module.exports.editAccount = async (userId) => {
    try {
      await PropertyModel.Edit({id: userId });
    } catch (err) {
      throw new Error('Could not edit Account.');
    }
};



module.exports.deleteAccount = async (userId)=>{
    try{
        await PropertyModel.delete({_id:userId});
    }catch(err){
        throw new Error('Could not delete account');
    }
};
    


module.exports.viewpurchase = async () => {
    try{
       const purchase = await PropertyModel.view({ purchase: 'true'});
       return purchase;
    } catch (err) {
        throw new Error ('Could not view purchase');
    }
};

 









