const loadCategory = () =>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(r => r.json())
    .then(data => showCategoryButtons(data.categories))
}
loadCategory()

const showCategoryButtons = (categories) =>{
    const btnContainer = document.getElementById('cat-button-container')
    categories.forEach(cat => {
        console.log(cat)
        btnContainer.innerHTML += `
        <button id='btn-${cat.category_id}' class="btn hover:bg-red-500 hover:text-white">
            ${cat.category}
        </button>
        `
    });
    console.log(btnContainer)
}