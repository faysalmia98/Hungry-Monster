fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    .then(response => response.json())
    .then(data => catagoriesDisplay(data))

const catagoriesDisplay = food => {
    const catagoriesWrapper = document.getElementById("catagories-wrapper");
    const foodCatagories = food.categories;
    for (let i = 0; i < foodCatagories.length - 6; i++) {
        const catagoriesItem = foodCatagories[i];

        const catagoriesDiv = document.createElement('div');
        catagoriesDiv.className = "single-catagories-item";
        const catagoriesThumb = catagoriesItem.strCategoryThumb;
        const catagoriesName = catagoriesItem.strCategory;
        const catagoriesInfo = `
            <img class="catagories-thumb" src="${catagoriesThumb}"/>
            <h3 class="catagories-name">${catagoriesName}</h3>
            <button class="btn btn-success" onclick="catagoriesDetails('${catagoriesName}')">Details</button>
        `;
        catagoriesDiv.innerHTML = catagoriesInfo;
        catagoriesWrapper.appendChild(catagoriesDiv);
    }
}
/* Submit Button Click Handler*/ 
const catagoriesDetails = foodName => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`;
    fetch(url)
        .then(response => response.json())
        .then(data => catagoriesDetailInfo(data.meals[0]))
}

const catagoriesDetailInfo = detailInfo => {
    const catagoriesDetailDiv = document.getElementById("catagories-detail");
    catagoriesDetailDiv.innerHTML = `
    <img class="meal-thumb" src= "${detailInfo.strMealThumb}"/>
    `;
    const catagoriesDetailInfoDiv = document.createElement('div')
    catagoriesDetailInfoDiv.className = "details-info";
    catagoriesDetailInfoDiv.innerHTML =`
    <h2 class="food-name">${detailInfo.strCategory}</h2>
    <h5 class="food-area">${detailInfo.strArea}</h5>
    <ul class="detail-list">
    <li>${detailInfo.strIngredient1}</li>
    <li>${detailInfo.strIngredient2}</li>
    <li>${detailInfo.strIngredient3}</li>
    <li>${detailInfo.strIngredient4}</li>
    <li>${detailInfo.strIngredient5}</li>
    <li>${detailInfo.strIngredient6}</li>
    <li>${detailInfo.strIngredient7}</li>
    <li>${detailInfo.strIngredient8}</li>
    </ul>
    `;
    catagoriesDetailDiv.appendChild(catagoriesDetailInfoDiv);
}
/* Search Button Click Handler */ 
document.getElementById("input-submit").addEventListener("click", function(){
    const foodName = document.getElementById("input-value").value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`;
    fetch(url)
        .then(response => response.json())
        .then(data => catagoriesDetailInfo(data.meals[0]))
});