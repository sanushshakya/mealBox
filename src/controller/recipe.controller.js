const {recipes} = require('../models');

const getAllRecipes = async (req,res) => {
    try{
        const recipe = await recipes.findAll();
        return res.status(200).send(recipe);
    }catch(e){
        return res.status(404).send(e.toString());
    }
}

const getRecipes = async (req,res) => {
    const {id} = req.params;
    try{
        const recipe = await recipes.findOne({
            where: {
                id: id
            }
        });
        return res.status(200).send(recipe);
    }catch(e){
        return res.status(404).send(e.toString());
    }
}

const createRecipes = async (req,res) => {
    const body = req.body;
    try{
        const newRecipe = await recipes.create(body);
        return res.status(200).send({
            "message":"New Recipe successfully created."
        })
    }catch(e){
        return res.status(400).send(e.toString());
    }
}

const updateRecipes = async (req,res) => {
    const {name,protein,calories,carbohydrates,fat,sugar,price} = req.body;
    const {id} = req.params;
    try{
        const updateRecipe = await recipes.update({
            name: name,
            protein: protein,
            calories: calories,
            carbohydrates: carbohydrates,
            fat: fat,
            sugar: sugar,
            price: price
        }, {
            where: {
                id: id
            }
        })
        return res.status(200).send({
            "message":"Recipe successfully updated."
        })
    }catch(e){
        return res.status(400).send(e.toString());
    }
}

const deleteRecipes = async (req,res) => {
    const {id} = req.params;
    try{
        const delRecipe = await recipes.destroy({
            where: {
                id: id
            }
        })
        return res.status(200).send({
            "message":"Recipe successfully deleted."
        })
    }catch(e){
        
    }
}

module.exports = {
    getAllRecipes,
    getRecipes,
    createRecipes,
    updateRecipes,
    deleteRecipes
}