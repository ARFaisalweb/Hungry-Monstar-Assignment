const meal = () => {
    const inputSearch = document.getElementById("input-search").value;
    const foodItems = document.getElementById("food-items");
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputSearch}`)
        .then(res => res.json())
        .then(data => {
            data.meals.forEach(foodItem => {
                const mealCard = document.createElement("div");
                mealCard.className = "meal-card";
                const thumb = foodItem.strMealThumb;
                const foodName = foodItem.strMeal;
                mealCard.innerHTML = `
                    <div class = "details" onclick="showDetails('${foodName}')">
                        <div class="food-icon">
                            <img src="${thumb}" alt="">
                        </div>
                        <h5 class="food-name">${foodName}</h5>
                    </div>
                `;
                foodItems.appendChild(mealCard);
            });
        })
        .catch(err => alert("Your searching food isn't available. Pls, search again."));
}

const displaymealDetails = name => {
    const mealDetails = document.getElementById("details");
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
        .then(res => res.json())
        .then(data => {
            const item = data.meals[0];
            mealDetails.innerHTML = `
            <div class = "meal-display">
                <p class = "meal-display-back" onclick="hideDisplayDetails()"; Go Back</p>
                <div class="meal-display-img">
                    <img class="meal-img" src="${item.strMealThumb}">
                </div>
                <div class="meal-display-details">
                    <h2 class="meal-display-heading">${item.strMeal}</h2>
                </div>
            </div>
            `
        })
}

const btn = document.getElementById("button-input");
btn.addEventListener("click", meal);