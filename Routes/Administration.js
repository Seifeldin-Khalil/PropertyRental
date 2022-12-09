const { Router } = require ('express');

const AdministrationController = require('../Controllers/Administration');

const AdministrationRouter = Router();

AdministrationRouter.get('/viewpending/',AdministrationController.viewPending);

AdministrationRouter.delete('/properyDelete/:propertyId', AdministrationController.deleteProperty);

AdministrationRouter.delete('/userDelete/:userId', AdministrationController.banUser);

AdministrationRouter.put('/updateProperty/:propertyId',AdministrationController.validateProperty);

AdministrationRouter.get('/getUsers/', AdministrationController.getUsers);

module.exports = AdministrationRouter;
