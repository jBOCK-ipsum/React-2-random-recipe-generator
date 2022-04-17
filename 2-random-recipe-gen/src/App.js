import "./App.css";
import "./components/RecipeTitle"

let welcomeText = "";

const randomHello = () => {
  let randomNum = Math.floor(Math.random() * (5 - 1 + 1) + 1);

  switch(randomNum) {
    case 1: welcomeText = "Why don't you eat some F*ing" 
    break;
    case 2: welcomeText = "Try not to F* up some"
    break;
    case 3: welcomeText = "You burnt it last time... try not to burn some"
    break;
    case 4: welcomeText = "Aren't you getting F*ing tired of this... try some"
    break;
    case 5: welcomeText = "Why don't you give this a F*ing try"
    break;
  }
};

const App = () => {
  return (
    <>
      <h1>{[welcomeText, randomHello()]}</h1>
      <RecipeTitle />
    </>
  );
};

export default App;
