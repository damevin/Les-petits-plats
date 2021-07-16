const recipesSection = document.querySelector('.results')

const getData = async () =>
	await fetch("../scripts/data/recipes.json", {
		mode: "no-cors",
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
	})
		.then((res) => res.json())
		.catch((err) => console.log("An error occurs when fetching recipes", err));


const createRecipesCard = (recipes) => {
 recipes.forEach(recipe => {
  recipesSection.innerHTML += new RecipeCard(recipe).recipeCard
 });
}

const init = async () => {
	const { recipes } = await getData();
 createRecipesCard(recipes)
 console.log(recipes)
};

init();
