import axios from "axios";

const getRecipeURL = () => {
    axios.get("https://api.spoonacular.com/recipes/random?apiKey=4d12802731824d398f7067d2c0394352")
    .then((response) => console.log(response.data))
}

const RecipeTitle = () => {
  return (
  <>
    <div>{getRecipeURL}</div>
  </>
  )
};

export default RecipeTitle