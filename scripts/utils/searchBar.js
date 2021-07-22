
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