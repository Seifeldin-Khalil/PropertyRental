const AuthService = require ('../Services/auth');

module.exports.postUser = async (req,res) => {
    try{
        const userInfo = {
            Username : req.body.Username,
            Password : req.body.Password,
            Name: req.body.Name
        };

        const userExists = await AuthService.doesUserExist(userInfo.Username);
        if (userExists){
            return res.status(422).send({
                error: 'A user with the same username aleardy exists.'
            });
        }
        await AuthService.createUser(userInfo);
    } catch (error){
        res.status(500).send({
            error: error.message
        });
    }
};