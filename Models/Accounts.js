const {Schema,model} = require('mongoose');

const UsersSchema = new Schema({
    Username:{
        type: 'String',
        required: true
    }
});

const UsersModel = model ('Users',UsersSchema);

module.exports = UsersModel;