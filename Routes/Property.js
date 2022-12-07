const {Router} = require('express');

const propertyController = require ('../Controllers/Property');

const propertyRouter = Router();

propertyRouter.get('/', propertyController.getproperties);

propertyRouter.post('/', propertyController.postProperty);

propertyRouter.delete('/:propertyID', propertyController.deleteProperty);

propertyRouter.put('/update/:propertyID', propertyController.EditProprty);

module.exports = propertyRouter;