const {Schema, model }= require ('mongoose');

const PurchaseSchema = new Schema({
    
    PaymentMethod:{
        type: 'String',
        required: true
    },
    Price: {
        type: 'Number',
        required: true
    },
    PropertyID:{
        type:'String',
        required: true
    },
    UserID :{
        type: 'String',
        required: true
    }
});
const PurchaseModel = model ('Purchase',PurchaseSchema);

module.exports = PurchaseModel;