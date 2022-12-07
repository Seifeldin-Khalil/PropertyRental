const {Router} = require('express');

const propertyController = require ('../Controllers/Property');

const propertyRouter = Router();

propertyRouter.put('/:propertyID', propertyController.EditProprty);

//AdministrationRouter.put('/updateProperty/:propertyI',AdministrationController.validateProperty);

propertyRouter.get('/', propertyController.getproperties);

propertyRouter.post('/', propertyController.postProperty);

propertyRouter.delete('/:propertyID', propertyController.deleteProperty);



module.exports = propertyRouter;