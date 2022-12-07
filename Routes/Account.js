const {Router} = require('express');

const AccountController = require ('../Controllers/Account');

const AccountRouter = Router();

AccountRouter.delete('/:userId', AccountController.deleteUser);

AccountRouter.post('/', AccountController.postUser);

module.exports = AccountRouter;