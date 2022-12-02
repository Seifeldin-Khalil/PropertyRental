const { Router } = require ('express');

const AdministrationController = require('../Controllers/Administration');

const AdministrationRouter = Router();

AdministrationRouter.get('/',AdministrationController.viewPending);
module.exports = AdministrationRouter;

AdministrationRouter.delete('/:propertyId', AdministrationController.deleteProperty);

AdministrationRouter.delete('/:userId', AdministrationController.banUser);



