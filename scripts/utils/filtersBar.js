const updateFiltersBar = (selectedFiltersUnduplicated, recipes) => {
	filtersBar.innerHTML = "";

	selectedFiltersUnduplicated.forEach((filter) => {
		return filtersBar.append(
			createDom(
				"div",
				`${filter}`,
				{ class: "filter__query" },
				createDom("i", { class: "fal fa-times-circle filter__query__icon" })
			)
		);
	});

	const filterQuery = document.querySelectorAll(".filter__query");
	const filters = Array.from(filterQuery);

	const result = recipes.filter((recipe) => {
		return filters.every((item) => {
			return recipe.ingredients.some((i) => {
				return i.ingredient.toLowerCase().includes(item.textContent.toLowerCase());
			});
		});
	});

	filterQuery.forEach((filter) => {
		filter.addEventListener("click", () => {
			const array = [...filterQuery];
			const index = array.indexOf(filter);
			array.splice(index, 1)
			console.log("===============");
			console.log(array);
			console.log("===============");
		});
	});
};
