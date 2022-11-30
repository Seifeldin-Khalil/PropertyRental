const { Router } = requre ('express');

const AdministrationController = require('../Controllers/Administration');

const properyyRouter = Router();

AdministrationRouter.delete('/:propertyId', AdministrationController.deleteProperty);

AdministrationRouter.delete('/:userId', AdministrationController.banUser);

AdministrationRouter.get('/',AdministrationController.viewPending);