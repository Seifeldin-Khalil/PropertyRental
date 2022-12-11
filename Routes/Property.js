const {Router} = require('express');

const propertyController = require ('../Controllers/Property');

const propertyRouter = Router();

propertyRouter.put('/:propertyID', propertyController.EditProprty);

//AdministrationRouter.put('/updateProperty/:propertyI',AdministrationController.validateProperty);

propertyRouter.get('/all', propertyController.getproperties);

propertyRouter.post('/post', propertyController.postProperty);

propertyRouter.delete('/:propertyID', propertyController.deleteProperty);

propertyRouter.get('/all/:userId', propertyController.findMyProperties);

module.exports = propertyRouter;