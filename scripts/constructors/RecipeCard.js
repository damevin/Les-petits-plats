class RecipeCard {
	constructor(data) {
		this._id = data.id;
		this._name = data.name;
		this._description = data.description;
		this._time = data.time;
		this._servings = data.servings;
		this._ustensils = data.ustensils;
		this._ingredients = data.ingredients;
		this._appliance = data.appliance;
	}

	get formatIngredients() {
		this._ingredients.forEach((ingredient) => {
			console.log(ingredient.name);
		});
	}

	/**
	 * Create recipe card with create dom function
	 * @returns HTMLElement - Recipe card
	 */
	get recipeCard() {
		const card = createDom(
			"article",
			{ class: "recipe__card" },
			createDom("div", { class: "recipe__card__placeholder" }),
			createDom(
				"section",
				{ class: "recipe__card__section" },
				createDom(
					"header",
					{ class: "recipe__card__header" },
					createDom("h2", `${this._name}`, { class: "recipe__card__header__title" }),
					createDom(
						"h2",
						`${this._time}min `,
						createDom("i", { class: "fal fa-clock recipe__card__header__icon" })
					)
				),
				createDom(
					"aside",
					createDom(
						"ul",
						{ class: "recipe__card__list" },
						// ... pour transformer les éléments du tableau en paramètres pour createDom
						//     .map() pour renvoyer un tableau car .forEach() renvoie undefined
						...this._ingredients.map((ingredient) => {
							// return pour renvoyer une valeur sinon .map() renvoie un tableau de undefined
							return createDom(
								"li",
								`${ingredient.ingredient} `,
								ingredient.quantity ? `${ingredient.quantity} ` : "",
								ingredient.unit ? `${ingredient.unit} ` : "",
								{
									class: "recipe__card__list",
								}
							);
						})
					),
					createDom("p", `${this._description}`, { class: "recipe__card__description" })
				)
			)
		);
		return card;
		/* return `
  <article>
   <img>
   <section>
    <header>${this._name} <strong><i class="fal fa-clock"></i> ${this._time}min</strong></header>
     <aside>
      <ul>${this._ingredients.map(ingredient => `<li>${ingredient.ingredient} ${ingredient.quantity}</li>`)}
      </ul>
      <p>${this._description}</p>
     </aside>
   </section>
  </article>

  createDom('li', `${this._ingredients.map(ingredient => `${ingredient.ingredient} ${ingredient.quantity}`)}`))
  
  `; */
	}
}
