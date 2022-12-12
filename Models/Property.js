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
        type: Schema.Types.ObjectId,
        ref:'account',
        required: true
    },
    ImgURL :{
        type: 'String',
        required:false
    }
});

const PropertyModel = model ('Property',PropertySchema);

module.exports = PropertyModel;