const AdministrationService = require('../Services/Administration');

module.exports.deleteProperty = async (req,res) => {
    const propertyId = req.params.propertyId;
    try{
    await AdministrationService.removeProperty(propertyId);
    res.send({
        msg: 'Property deleted successfully.'
    });}
    catch (err) {
        return res.status(500).send({
            error: err.message
        });
    }
};

module.exports.banUser = async (req,res) => {
    const userId = req.params.userId;
    try{
        await AdministrationService.banUser(userId);
        res.send({
            msg: 'User banned successfully.'
        });} 
        catch (err){
            return res.status(500).send({
                error: err.message
            });
        }
};

module.exports.viewPending = async (req,res) => {
    try{
    const properties = await AdministrationService.viewPending();
    return res.send({properties});
    } catch (err) {
    res.status(500);
    return res.send({ error: err.message});
    }
};