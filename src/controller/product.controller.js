const {products} = require('../models');

const getAllProducts = async (req,res) => {
    try{
        const product = await products.findAll();
        return res.status(200).send(product);
    }catch(e){
        return res.status(404).send(e.toString());
    }
}

// const getProducts = async (req,res) => {
//     const {id} = req.params;
//     try{
//         const product = await products.findOne({
//             where: {
//                 id: id
//             }
//         });
//         return res.status(200).send(product);
//     }catch(e){
//         return res.status(404).send(e.toString());
//     }
// }

const createProduct = async (req,res) => {
    const body = req.body;
    try{
        const newProduct = await products.create(body);
        return res.status(200).send({
            "message":"New product successfully created."
        })
    }catch(e){
        return res.status(400).send(e.toString());
    }
}

const updateProduct = async (req,res) => {
    const {product_Name, recipe_Name, description, quantity, } = req.body;
    const {id} = req.params;
    try{
        const updateRecipe = await recipes.update({
            name: product_Name,
            recipe_Name: recipe_Name,
            description: description,
            quantity: quantity
        }, {
            where: {
                id: id
            }
        })
        return res.status(200).send({
            "message":"Product successfully updated."
        })
    }catch(e){
        return res.status(400).send(e.toString());
    }
}

const deleteProduct= async (req,res) => {
    const {id} = req.params;
    try{
        const delProduct= await products.destroy({
            where: {
                id: id
            }
        })
        return res.status(200).send({
            "message":"Product successfully deleted."
        })
    }catch(e){
        
    }
}

module.exports = {
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct
}