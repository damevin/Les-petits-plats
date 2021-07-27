const updateFiltersBar = (selectedFilters, filterQuery) => {
	filtersBar.innerHTML = "";
	selectedFilters.forEach((filter) => {
		filtersBar.innerHTML += `<p class="filter__query">${filter}</p>`;
  const filterQuery = document.querySelector('.filter__query');
  listenOnFiltersBar(filterQuery)
	});
};

const listenOnFiltersBar = (filterQuery) => {
 filterQuery.forEach((filter) => {
  console.log(filter)
 })
}