const {Router} = require('express');

const AccountController = require ('../Controllers/Account');

const AccountRouter = Router();

AccountRouter.delete('/:userId', AccountController.deleteUser);

AccountRouter.post('/signin', AccountController.postUser);

AccountRouter.get('/:userId', AccountController.viewPurchaseHistory);

AccountRouter.put('/:userId', AccountController.EditAccount);

module.exports = AccountRouter;