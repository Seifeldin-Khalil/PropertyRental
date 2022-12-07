const {Router} = require('express');

const PurchaseController = require ('../Controllers/Purchase');

const PurchaseRouter = Router();

PurchaseRouter.get('/', PurchaseController.getPurchase);

PurchaseRouter.post('/New/', PurchaseController.postPayment);

PurchaseRouter.put('/', PurchaseController.EditPurchase);

PurchaseRouter.put('/', PurchaseController.validatPurchase);

module.exports = PurchaseRouter;