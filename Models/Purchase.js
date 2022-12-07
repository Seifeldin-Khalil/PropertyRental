const {Schema, model }= require ('mongoose');

const PurchaseSchema = new Schema({
    Name:{
        type: 'String',
        required: true
    },
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
    
    
});
const PurchaseModel = model ('Purchase',PurchaseSchema);

module.exports = PurchaseModel;