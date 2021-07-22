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

/**
	* Create recipes card with a constructor
	* @param {Array | Object} recipes 
	*/
const createRecipesCard = (recipes) => {
	recipes.forEach((recipe) => {
		recipesSection.append(new RecipeCard(recipe).recipeCard);
	});
};

/**
	* Filter query and display recipes card matching with query
	* @param {Array | Object} recipes 
	* @param {HTMLElement} searchBar 
	*/
const filteredRecipes = (recipes, searchBar) => {
	searchBar.addEventListener("keyup", (e) => {
		if (e.target.value.length > 3) {
			recipesSection.innerHTML = "";
			const query = e.target.value.toLowerCase();
			const results = recipes.filter((recipe) => {
				return recipe.name.toLowerCase().startsWith(query) || recipe.description.toLowerCase().includes(query)
			});
			createRecipesCard(results)
		} else if (e.target.value.length <= 3) {
			recipesSection.innerHTML = "";
			createRecipesCard(recipes);
		}
	});
};

const init = async () => {
	const { recipes } = await getData();
	generateFilters(recipes);
	listenOnInputs(recipes);
	createRecipesCard(recipes)
	filteredRecipes(recipes, globalSearchBar);
};

init();
