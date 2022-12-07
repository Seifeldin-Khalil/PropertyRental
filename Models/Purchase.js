const {Schema, model }= require ('mongoose');

const PurchaseSchema = new Schema({
    
    PaymentMethod:{
        type: 'String',
        required: true
    },
    Status:{    
        type: 'Boolean',
        required: true
    },

    description:{    
        type: 'String',
        required: true
    },
    price: {
        type: 'Number',
        required: true
    },
    UserID :{
        type: 'String',
        required: true
    }
    
});
const PurchaseModel = model ('Purchase',PurchaseSchema);

module.exports = PurchaseModel;