const generateFilters = (recipes) => {
	let ingredients = [];
	let apparatus = [];
	let ustensils = [];
	recipes.forEach((recipe) => {
		ingredients = [
			...new Set([...ingredients, ...recipe.ingredients.map((i) => i.ingredient.toLowerCase())]),
		];
		ustensils = [...new Set([...ustensils, ...recipe.ustensils.map((u) => u.toLowerCase())])];
		apparatus = [...new Set([...apparatus, ...[recipe.appliance]])];
	});
	return { ingredients, ustensils, apparatus };
};

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
	recipes.forEach((recipe) => {
		recipesSection.append(new RecipeCard(recipe).recipeCard);
	});
};


const init = async () => {
	const { recipes } = await getData();
	generateFilters(recipes);
	createRecipesCard(recipes);
	listenOnInputs(recipes)
};

init();
