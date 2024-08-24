const mongoose = require('mongoose')

const productoSchema = mongoose.Schema({
    nombres:{
        type: String,
        required: true
    },
    descripcion:{
        type: String,
        required: true
    },
    precio:{
        type: Number,
        required: true
    }
},{versionkey:false});

module.exports = mongoose.model('Producto', productoSchema)