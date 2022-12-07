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
    

    Validation:{    
        type: 'Boolean',
        required: true
    },
    
});
const PurchaseModel = model ('Purchase',PurchaseSchema);

module.exports = PurchaseModel;