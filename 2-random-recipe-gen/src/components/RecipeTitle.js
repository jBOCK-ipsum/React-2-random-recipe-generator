import axios from "axios";

const getRecipeURL = () => {
    axios.get("https://api.spoonacular.com/recipes/random?apiKey=********API-KEY*************")
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
