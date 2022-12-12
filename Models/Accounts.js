const {Schema,model} = require('mongoose');

const UsersSchema = new Schema({
    Username:{
        type: 'String',
        required: true
    },
    Password:{
        type: 'String',
        required: true
    },
    Name:{
        type:'String',
        required: true
    },
    Role:{
        type:'String',
        required:true
    },
    Email:{
        type:"String",
        required: false
    },
    Properties :[{
        type: Schema.Types.ObjectId,
        ref:'properties',
        required: false
    }]
});

const UsersModel = model ('Users',UsersSchema);

module.exports = UsersModel;