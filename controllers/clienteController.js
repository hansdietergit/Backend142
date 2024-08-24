const Cliente = require('../models/Cliente');

exports.agregarClientes = async (req,res) => {
    try {
        let clientes;
        clientes = new Cliente(req.body);
        await clientes.save();
        res.json(clientes);
    } catch (e) {
        console.log(e);
        res.status(500).send(`error `)
    }
}

exports.mostrarClientes = async (req,res) => {
    try {
        let clientes;        
        clientes = await Cliente.find();
        res.json(clientes);
    } catch (e) {
        console.log(e.msg);
        res.status(500).send('error')
    }
}

exports.buscarClientes = async (req,res) => {
    try {
        let clientes;
        console.log('*** Buscar ',req.params);
        
        clientes = await Cliente.findById(req.params.id);
        if(!clientes){
            res.status(404).send({msg:"no esta"})
        }else{
            res.json(clientes);
        }
    } catch (e) {
        console.log(e.msg);
        res.status(500).send('error')
    }
}

exports.editarClientes = async (req,res) => {
    try {
        let clientes;
        
        clientes = await Cliente.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!clientes){
            res.status(404).send({msg:"no esta"})
        }else{
            res.json(clientes);
        }
    } catch (e) {
        console.log(e.msg);
        res.status(500).send('error')
    }
}
exports.modificarClientes = async (req,res) => {
    try {
        let clientes;
        
        clientes = await Cliente.findOneAndUpdate({_id:req.params.id},req.body,{new:true});
        if(!clientes){
            res.status(404).send({msg:"no esta"})
        }else{
            res.json(clientes);
        }
    } catch (e) {
        console.log(e.msg);
        res.status(500).send('error')
    }
}

exports.borrarClientes = async (req,res) => {
    try {
        let clientes;
        clientes = await Cliente.findById(req.params.id);
        console.log(clientes);
        if(!clientes){
            res.status(404).send({msg:"no esta"});
            return
        }else{
            clientes = await Cliente.findByIdAndDelete(clientes.id);
            res.json({msg:"eliminado"})
        }
    } catch (e) {
        console.log(e);
        res.status(500).send('error')
    }
}