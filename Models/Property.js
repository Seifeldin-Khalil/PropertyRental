const {Schema,model} = require('mongoose');

const PropertySchema = new Schema({
    name:{
        type: 'String',
        required: true
    },
    description:{
        type: 'String',
        required: true
    },
    price:{
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
    }
});

const PropertyModel = model ('Property',PropertySchema);

module.exports = PropertyModel;