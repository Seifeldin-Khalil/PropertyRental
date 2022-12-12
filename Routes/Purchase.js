const { Router } = require ('express');

const PurchaseController = require('../Controllers/Purchase');

const PurchaseRouter = Router();

//PurchaseRouter.post('/:ID', PurchaseController.postPayment);

PurchaseRouter.post('/:ID', PurchaseController.postPayment);

PurchaseRouter.put('/edit/:propertyID', PurchaseController.MarkUnAvailable);

PurchaseRouter.delete('/:paymentID', PurchaseController.RefundPayment);

PurchaseRouter.get('/MyP/:userId', PurchaseController.findMyPendings);
/*PurchaseRouter.get('/', PurchaseController.getPurchase);

PurchaseRouter.put('/', PurchaseController.EditPurchase);

PurchaseRouter.put('/', PurchaseController.validatPurchase);*/

module.exports = PurchaseRouter;

