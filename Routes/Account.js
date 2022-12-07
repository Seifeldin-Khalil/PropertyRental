const {Router} = require('express');

const AccountController = require ('../Controllers/Account');

const AccountRouter = Router();

AccountRouter.get('/', AccountController.getAccount);

module.exports = AccountRouter;


AccountRouter.get('/', AccountController.editAccount);

AccountRouter.get('/', AccountController.deleteAccount);

AccountRouter.post('/', AccountController.viewPurchase);


AccountRouter.post('/signup', AccountController.postUser);

AccountRouter.post('/signin', AccountController.postLogin);
