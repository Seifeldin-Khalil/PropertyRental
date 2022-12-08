const {Schema, model }= require ('mongoose');

const PurchaseSchema = new Schema({
    
    PaymentMethod:{
        type: 'String',
        required: true
    },
    Status:{    
        type: 'String',
        required: true
    },

    Description:{    
        type: 'String',
        required: true
    },
    Price: {
        type: 'Number',
        ref: 'properties',
        required: true
    },
    UserID :{
        type: 'String',
        required: true
    }
    
});
const PurchaseModel = model ('Purchase',PurchaseSchema);

module.exports = PurchaseModel;