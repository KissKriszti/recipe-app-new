export default (recipes = [], action) => {
    switch (action.type) {
        case 'GET_ALL':
            return action.payload
        case 'CREATE':
            return [...recipes, action.payload]
        case 'UPDATE':
            return recipes.map(recipes => recipes._id === action.payload._id ? action.payload : recipes)
        case 'DELETE':
            return recipes.filter((recipe) => recipe._id !== action.payload)
        default:
            return recipes
    }
};