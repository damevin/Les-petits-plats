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

const listenOnInputs = (recipes) => {
	const { ingredients, ustensils, apparatus } = generateFilters(recipes);
	/**
	 * Affichage des ustensils au clique sur le toggle
	 */
	ustensilsToggle.addEventListener("click", () => {
		if (ustensilsChevron.classList.contains("fa-chevron-down")) {
			ustensilsChevron.classList.replace("fa-chevron-down", "fa-chevron-up");
			ingredientWrapper.innerHTML = "";
			apparatusWrapper.innerHTML = "";
			ustensils.forEach((ustensil) => {
				ustensilsWrapper.innerHTML += `<li>${ustensil}</li>`;
			});
		} else {
			ustensilsChevron.classList.replace("fa-chevron-up", "fa-chevron-down");
			ustensilsWrapper.innerHTML = "";
		}
	});

	/**
	 * Affichage des ingredients au clique sur le toggle
	 */
	ingredientToggle.addEventListener("click", () => {
		if (ingredientChevron.classList.contains("fa-chevron-down")) {
			ingredientChevron.classList.replace("fa-chevron-down", "fa-chevron-up");
			ustensilsWrapper.innerHTML = "";
			apparatusWrapper.innerHTML = "";
			ingredients.forEach((ingredient) => {
				ingredientWrapper.innerHTML += `<li>${ingredient}</li>`;
			});
		} else {
			ingredientChevron.classList.replace("fa-chevron-up", "fa-chevron-down");
			ingredientWrapper.innerHTML = "";
		}
	});

	/**
	 * Affichage des appareils au clique sur le toggle
	 */
	apparatusToggle.addEventListener("click", () => {
		if (apparatusChevron.classList.contains("fa-chevron-down")) {
			apparatusChevron.classList.replace("fa-chevron-down", "fa-chevron-up");
			apparatus.forEach((apparatus) => {
				apparatusWrapper.innerHTML += `<li>${apparatus}</li>`;
				ustensilsWrapper.innerHTML = "";
				ingredientWrapper.innerHTML = "";
			});
		} else {
			apparatusChevron.classList.replace("fa-chevron-up", "fa-chevron-down");
			apparatusWrapper.innerHTML = "";
		}
	});
};

const init = async () => {
	const { recipes } = await getData();
	generateFilters(recipes);
	createRecipesCard(recipes);
	listenOnInputs(recipes)
};

init();
