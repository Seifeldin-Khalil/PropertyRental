const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const initiateDBConnection = require ('./config/db');
const propertiesRouter = require('./Routes/Property');
const AdministrationRouter = require('./Routes/Administration');
const AccountRouter = require ('./Routes/Account');
const PurchaseRouter = require('./Routes/Purchase');

dotenv.config({
  path: './config/.env'
});

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.use('/properties', propertiesRouter);
app.use('/administration',AdministrationRouter);
app.use('/account', AccountRouter);
app.use('/Purchase',PurchaseRouter);
app.use(cors());


app.listen(PORT, async() => {
  console.log(`Server started and listening to port ${PORT}`);
  await initiateDBConnection();
});