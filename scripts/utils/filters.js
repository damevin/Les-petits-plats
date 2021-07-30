/**
 *
 * @param {Array | Objects} recipes
 */
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
				return ustensilsWrapper.append(createDom("li", `${ustensil}`, { class: "ustensil__item" }));
			});
		} else {
			ustensilsChevron.classList.replace("fa-chevron-up", "fa-chevron-down");
			ustensilsWrapper.innerHTML = "";
		}
		listenOnUstensilsInput();
	});

	ustensilsInput.addEventListener("keyup", (e) => {
		ustensilsWrapper.innerHTML = "";
		if (e.target.value.length > 3) {
			const query = e.target.value.toLowerCase();
			const results = ustensils.filter((ustensil) => {
				return ustensil.toLowerCase().includes(query);
			});
			results.forEach((result) => {
				return ustensilsWrapper.append(createDom("li", `${result}`, { class: "ustensil__item" }));
			});
		}
		listenOnUstensilsInput();
	});

	const listenOnUstensilsInput = () => {
		const ustensilsItems = document.querySelectorAll(".ustensil__item");
		ustensilsItems.forEach((item) => {
			item.addEventListener("click", () => {
				selectedFilters.push(item.textContent);
				const selectedFiltersUnduplicated = [...new Set(selectedFilters)];
				updateFiltersBar(selectedFiltersUnduplicated, recipes);
			});
		});
	};

	/**
	 * Affichage des ingredients au clique sur le toggle
	 */
	ingredientToggle.addEventListener("click", () => {
		if (ingredientChevron.classList.contains("fa-chevron-down")) {
			ingredientChevron.classList.replace("fa-chevron-down", "fa-chevron-up");
			apparatusChevron.classList.replace("fa-chevron-down", "fa-chevron-up");
			ustensilsChevron.classList.replace("fa-chevron-down", "fa-chevron-up");
			ustensilsWrapper.innerHTML = "";
			apparatusWrapper.innerHTML = "";
			ingredients.forEach((ingredient) => {
				return ingredientWrapper.append(
					createDom("li", `${ingredient}`, { class: "ingredient__item" })
				);
			});
		} else {
			ingredientChevron.classList.replace("fa-chevron-up", "fa-chevron-down");
			ingredientWrapper.innerHTML = "";
		}
		listenOnIngredientsItems();
	});

	ingredientInput.addEventListener("keyup", (e) => {
		ingredientWrapper.innerHTML = "";
		if (e.target.value.length > 3) {
			const query = e.target.value.toLowerCase();
			const results = ingredients.filter((ingredient) => {
				return ingredient.toLowerCase().includes(query);
			});
			results.forEach((result) => {
				return ingredientWrapper.append(createDom("li", `${result}`, { class: "ingredient__item" }));
			});
		}
		listenOnIngredientsItems();
	});

	const listenOnIngredientsItems = () => {
		const ingredientsItems = document.querySelectorAll(".ingredient__item");
		ingredientsItems.forEach((item) => {
			item.addEventListener("click", () => {
				selectedFilters.push(item.textContent);
				const selectedFiltersUnduplicated = [...new Set(selectedFilters)];
				updateFiltersBar(selectedFiltersUnduplicated, recipes);
			});
		});
	};

	/**
	 * Affichage des appareils au clique sur le toggle
	 */
	apparatusToggle.addEventListener("click", () => {
		if (apparatusChevron.classList.contains("fa-chevron-down")) {
			apparatusChevron.classList.replace("fa-chevron-down", "fa-chevron-up");
			apparatus.forEach((apparatus) => {
				apparatusWrapper.innerHTML += `<li class="apparatus__item">${apparatus}</li>`;
				ustensilsWrapper.innerHTML = "";
				ingredientWrapper.innerHTML = "";
			});
		} else {
			apparatusChevron.classList.replace("fa-chevron-up", "fa-chevron-down");
			apparatusWrapper.innerHTML = "";
		}
		listenOnApparatusItems();
	});

	apparatusInput.addEventListener("keyup", (e) => {
		apparatusWrapper.innerHTML = "";
		if (e.target.value.length > 3) {
			const query = e.target.value.toLowerCase();
			const results = apparatus.filter((item) => {
				return item.toLowerCase().includes(query);
			});
			results.forEach((result) => {
				return apparatusWrapper.append(createDom("li", `${result}`, { class: "apparatus__item" }));
			});
		}
		listenOnApparatusItems();
	});

	const listenOnApparatusItems = () => {
		const apparatusItems = document.querySelectorAll(".apparatus__item");
		apparatusItems.forEach((item) => {
			item.addEventListener("click", () => {
				selectedFilters.push(item.textContent);
				const selectedFiltersUnduplicated = [...new Set(selectedFilters)];
				updateFiltersBar(selectedFiltersUnduplicated, recipes);
			});
		});
	};
};
