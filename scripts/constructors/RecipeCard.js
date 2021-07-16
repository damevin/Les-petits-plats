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
  this._ingredients.forEach(ingredient => {
   console.log(ingredient.name)
  });
 }


	get recipeCard() {
  const element = createDom('h1', 'tes')
  return element
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
  
  `; */
	}
}
