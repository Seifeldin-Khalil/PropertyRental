const {Schema, model }= require ('mongoose');

const PurchaseSchema = new Schema({
    
    PaymentMethod:{
        type: 'String',
        required: true
    },
    Price: {
        type: 'Number',
        ref: 'properties',
        required: true
    },
    PropertyID:{
        type:'String',
        ref: 'properties',
        required: true
    },
    UserID :{
        type: 'String',
        ref: 'account',
        required: true
    },
});
const PurchaseModel = model ('Purchase',PurchaseSchema);

module.exports = PurchaseModel;