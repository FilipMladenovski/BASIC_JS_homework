function recipe() {
    let input = prompt("Please enter your recipe name:");
    let recipeName = document.querySelector("#recipe-name");
    recipeName.innerHTML = `<h1>${input}</h1>`;

    let ingredientCount = parseInt(prompt("How many ingredients do we need for the recipe?"));
    let ingredients = [];
    for (let i = 1; i <= ingredientCount; i++) {
        let ingredient = prompt(`Enter the name of ingredient ${i}:`);
        ingredients.push(ingredient);
    }

    let ingredientCounts = document.querySelector('#ingredient-count');
    for (let ingredient of ingredients) {
        ingredientCounts.innerHTML += `<li>${ingredient}</li>`;
    }

}

recipe();