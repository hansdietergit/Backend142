const mongoose = require('mongoose');
require('dotenv').config();

const conectarBD=()=>{
    mongoose
        .connect(process.env.DB_MONGO)
        .then(()=>console.log('conect'))
        .catch((e)=>console.log(e))
}

module.exports = conectarBD