const {Router} = require('express');

const propertyController = require ('../Controllers/Property');

const propertyRouter = Router();

propertyRouter.get('/', propertyController.getproperties);

propertyRouter.post('/post', propertyController.postProperty);

propertyRouter.delete('/:propertyID', propertyController.DeleteProperty);

propertyRouter.put('/propertyAvailability/:propertyID', propertyController.EditProprty);

module.exports = propertyRouter;