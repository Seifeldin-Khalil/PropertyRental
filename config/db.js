const mongoose = require ('mongoose');

const initiateDBConnection = async () => {
    try{
        await mongoose.connect (process.env.MONGO_CONNECTION_URI);
        console.log('Connected to Mongo DB server');
    } catch(error){
        console.log(aaa);
    }
};

module.exports = initiateDBConnection;