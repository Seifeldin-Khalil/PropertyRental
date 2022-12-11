const {Schema,model} = require('mongoose');

const PropertySchema = new Schema({
    Name:{
        type: 'String',
        required: true
    },
    Description:{
        type: 'String',
        required: true
    },
    Price:{
        type: 'Number',
        required: true
    },
    Available:{
        type: 'Boolean',
        required: true
    },
    Pending:{
        type:'Boolean',
        required: true
    },
    Paid:{
        type:'Boolean',
        required: true
    },
    UserID :{
        type: 'String',
        required: true
    }
});

const PropertyModel = model ('Property',PropertySchema);

module.exports = PropertyModel;