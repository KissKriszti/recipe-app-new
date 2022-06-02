import Recipe from "../models/recipeModel.js";

export const getRecipes = async (req, res) => {
    try{
        const data = await Recipe.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
};

export const getRecipeByID = async (req, res) => {
    try {
        const {id} = req.params;
        const data = await Recipe.findById(id);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({message: error.message})
    }
};

export const postRecipe = async (req, res) => {
    console.log(req.body)
    let newRecipe = new Recipe(req.body);
    try {
        const recipeToSave = await newRecipe.save()
        res.status(200).json(recipeToSave)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
};

export const updateRecipe = async (req, res) => {
    const toBeUpdatedRecipeID = req.params.id
    try {
        const updatedRecipe = await Recipe.findByIdAndUpdate(toBeUpdatedRecipeID, {
            ...req.body
        })
        res.status(200).json(updatedRecipe)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

export const deleteRecipe = async (req, res) => {
    const toBeDeletedRecipeID = req.params.id
    try {
        await Recipe.findByIdAndRemove(toBeDeletedRecipeID)
        res.status(200).json({message: 'Post deleted successfully'})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

export const deleteAllRecipes = async (req, res) => {
    try{
        await Recipe.deleteMany();
        res.json("Data has been deleted")
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
};