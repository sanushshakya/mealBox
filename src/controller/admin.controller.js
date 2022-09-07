const {admins} = require('../models');
const {hashPasswordAsync, comparePasswordAsync} = require('../utils/bcrypt.utils')

const getAdmin = async (req, res) => {
    try{
        const admin = await admins.findAll();
        return res.status(200).send(admin);
    } catch(e) {
        return res.status(404).send(e.toString());
    }
}

const createAdmin = async (req, res) => {
    const { name,email,password } = req.body;
    if(!password){
        return res.status(400).send({
            "message":"Please set your password."
        });
    }
    const hashPassword = await hashPasswordAsync(password);
    try{
        const newAdmin = await admins.create({
            name: name,
            email: email,
            password: hashPassword
        });
        return res.status(200).send(newAdmin);
    } catch(e) {
        return res.status(400).send(e.toString());
    }
}

const updateAdmin = async (req, res) => {
    const {id} = req.params;
    let { name, email, password } = req.body;
    if(password){
        password = hashPasswordAsync(password);
    } 
    try{
        await admins.update({
            name: name,
            email: email,
            password: password
        },
        {
            where: {
                id: id
            }
        });
        return res.status(200).send({
            "message":"Admin updated Successfully."
        });
    } catch(e) {
        return res.status(404).send(e.toString());
    }
}

const deleteAdmin = async (req, res) => {
    const {id} = req.params;
    try{
        await admins.destroy({
            where: {
                id: id
            }
        });
        return res.status(200).send({
            "message":"Admin deleted Successfully."
        });
    } catch(e) {
        return res.status(404).send(e.toString());
    }
}


module.exports = {
    getAdmin,
    createAdmin,
    updateAdmin,
    deleteAdmin
}