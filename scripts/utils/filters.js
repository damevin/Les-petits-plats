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
				ustensilsWrapper.innerHTML += `<li>${ustensil}</li>`;
			});
		} else {
			ustensilsChevron.classList.replace("fa-chevron-up", "fa-chevron-down");
			ustensilsWrapper.innerHTML = "";
		}
	});

	ustensilsInput.addEventListener("keyup", (e) => {
		ustensilsWrapper.innerHTML = "";
		if (e.target.value.length > 3) {
			const query = e.target.value.toLowerCase();
			const results = ustensils.filter((ustensil) => {
				return ustensil.toLowerCase().includes(query);
			});
			results.forEach((result) => {
				ustensilsWrapper.innerHTML += `<li>${result}</li>`;
			});
		}
	});

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
				ingredientWrapper.innerHTML += `<li>${ingredient}</li>`;
			});
		} else {
			ingredientChevron.classList.replace("fa-chevron-up", "fa-chevron-down");
			ingredientWrapper.innerHTML = "";
		}
	});

	ingredientInput.addEventListener("keyup", (e) => {
		ingredientWrapper.innerHTML = "";
		if (e.target.value.length > 3) {
			const query = e.target.value.toLowerCase();
			const results = ingredients.filter((ingredient) => {
				return ingredient.toLowerCase().includes(query);
			});
			results.forEach((result) => {
				ingredientWrapper.innerHTML += `<li>${result}</li>`;
			});
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

	apparatusInput.addEventListener("keyup", (e) => {
		apparatusWrapper.innerHTML = "";
		if (e.target.value.length > 3) {
			const query = e.target.value.toLowerCase();
			const results = apparatus.filter((item) => {
				return item.toLowerCase().includes(query);
			});
			results.forEach((result) => {
				apparatusWrapper.innerHTML += `<li class="ingredient__item">${result}</li>`;
				const ingredientItem = document.querySelector(".ingredient__item");
				ingredientItem.addEventListener("click", () => {
					selectedFilters.push(ingredientItem.textContent);
					updateFiltersBar(selectedFilters)
					/* console.log(selectedFilters.indexOf(ingredientItem.textContent));
					console.log("===================");
					console.log(selectedFilters);
					console.log("==================="); */
				});
			});
		}
	return selectedFilters
	});
};
