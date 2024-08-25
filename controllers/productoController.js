const Producto = require('../models/Producto');

exports.agregarProductos = async (req,res) => {
    try {
        let productos;
        productos = new Producto(req.body);
        await productos.save();
        res.json(productos);
    } catch (e) {
        console.error(e);
        res.status(500).send(`error `)
    }
}

exports.mostrarProductos = async (req,res) => {
    try {
        let productos;        
        productos = await Producto.find();
        res.json(productos);
    } catch (e) {
        console.error(e.msg);
        res.status(500).send('error')
    }
}

exports.buscarProductos = async (req,res) => {
    try {
        let productos;
        productos = await Producto.findById(req.params.id);
        if(!productos){
            res.status(404).send({msg:"no esta"})
        }else{
            res.json(productos);
        }
    } catch (e) {
        console.error(e.msg);
        res.status(500).send('error')
    }
}

exports.editarProductos = async (req,res) => {
    try {
        let productos;
        productos = await Producto.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!productos){
            res.status(404).send({msg:"no esta"})
        }else{
            res.json(productos);
        }
    } catch (e) {
        console.error(e.msg);
        res.status(500).send('error')
    }
}
exports.modificarProductos = async (req,res) => {
    try {
        let productos;
        productos = await Producto.findOneAndUpdate({_id:req.params.id},req.body,{new:true});
        if(!productos){
            res.status(404).send({msg:"no esta"})
        }else{
            res.json(productos);
        }
    } catch (e) {
        console.error(e.msg);
        res.status(500).send('error')
    }
}

exports.borrarProductos = async (req,res) => {
    try {
        let productos;
        productos = await Producto.findById(req.params.id);
        if(!productos){
            res.status(404).send({msg:"no esta"});
            return
        }else{
            productos = await Producto.findByIdAndDelete(productos.id);
            res.json({msg:"eliminado"})
        }
    } catch (e) {
        console.error(e);
        res.status(500).send('error')
    }
}
