const { Router } = require ('express');

const PurchaseController = require('../Controllers/Purchase');

const PurchaseRouter = Router();

PurchaseRouter.post('/', PurchaseController.postPayment);

PurchaseRouter.put('/edit/:propertyID', PurchaseController.MarkUnAvailable);

PurchaseRouter.delete('/:paymentID', PurchaseController.RefundPayment);
/*PurchaseRouter.get('/', PurchaseController.getPurchase);

PurchaseRouter.put('/', PurchaseController.EditPurchase);

PurchaseRouter.put('/', PurchaseController.validatPurchase);*/

module.exports = PurchaseRouter;

