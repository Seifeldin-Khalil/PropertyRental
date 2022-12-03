const {Router} = require('express');

const PurchaseController = require ('../Controllers/Purchase');

const PurchaseRouter = Router();

PurchaseRouter.get('/', PurchaseController.getPurchase);

module.exports = PurchaseRouter;

PurchaseRouter.post('/', PurchaseController.MakePayment);

PurchaseRouter.post('/', PurchaseController.EditPurchase);

PurchaseRouter.put('/', PurchaseController.validatPurchase);