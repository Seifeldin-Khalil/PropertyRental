const { Router } = require ('express');

const AdministrationController = require('../Controllers/Administration');

const AdministrationRouter = Router();

AdministrationRouter.get('/',AdministrationController.viewPending);

AdministrationRouter.delete('/properyDelete/:propertyId', AdministrationController.deleteProperty);

AdministrationRouter.delete('/userDelete/:userId', AdministrationController.banUser);

AdministrationRouter.put('/updateProperty/:propertyId',AdministrationController.validateProperty);


module.exports = AdministrationRouter;
