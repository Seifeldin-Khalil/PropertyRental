const {Router} = require('express');

const propertyController = require ('../Controllers/Property');

const propertyRouter = Router();

propertyRouter.get('/', propertyController.getproperties);

module.exports = propertyRouter;

propertyRouter.post('/', propertyController.postProperty);

propertyRouter.post('/', propertyController.DeleteProperty);

propertyRouter.post('/', propertyController.EditProprty);