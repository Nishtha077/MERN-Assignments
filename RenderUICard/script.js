
const input = document.querySelector('input[type="search"]');
fetchQuery = 'https://dummyjson.com/products';
renderObjects("", fetchQuery);
input.onchange = () => {

    document.querySelector(".phones").innerHTML = '';
    fetchQuery = "https://dummyjson.com/products/search?q="
    renderObjects(input.value, fetchQuery);
};

function renderObjects(item, fetchQuery){
    const res = fetch(fetchQuery + item);

    res.then((data) => {
        const obj = data.json();

        obj.then((js) => {
            renderUI(js);
        }).catch((err) => {
            console.log("Error occurred in parsing JS: ", err);
        })
    })
    .catch((err) => {
        console.log("Error Occurred in fetching: ", err);
    });

}


const renderUI = (js) => {

    products = js.products;    
    let container = document.querySelector(".phones");
    
    products.forEach((prod) => {
        let newPhone = document.createElement("div");
        newPhone.classList.add("card");
        addPhoto(newPhone, prod);
        addTitle(newPhone, prod);
        addCategory(newPhone, prod);
        addPrice(newPhone, prod);
        addRating(newPhone, prod);

        container.appendChild(newPhone);
    })
    // console.log(products[0]);

}


function addPhoto(newPhone, prod) {
    let newPhoto = document.createElement("img");
    newPhoto.src = prod.images[0];
    newPhoto.alt = "image";
    newPhoto.style.width = "200px";
    newPhoto.style.height = "150px";
    newPhoto.style.gridColumnStart = 1;
    newPhoto.style.gridColumnEnd = 3;
    newPhoto.style.margin = "auto";
    newPhone.appendChild(newPhoto);
}

function addTitle(newPhone, prod){
    let newHeading = document.createElement("h3");
    newHeading.textContent = prod.title;
    newHeading.style.textAlign = "center";
    newHeading.style.gridColumnStart = 1;
    newHeading.style.gridColumnEnd = 3;
    newPhone.appendChild(newHeading);
}

function addCategory(newPhone, prod){
    let newCat = document.createElement("p");
    newCat.textContent = "Category - " + prod.category;
    newCat.style.textAlign = "center";
    newCat.style.gridColumnStart = 1;
    newCat.style.gridColumnEnd = 3;
    newPhone.appendChild(newCat);
}

function addPrice(newPhone, prod){
    let newPrice = document.createElement("p");
    newPrice.textContent = "Price: " + prod.price;
    newPrice.style.textAlign = "center";
    newPrice.style.border = "2px solid black";
    newPrice.style.borderRadius = "5px";
    newPhone.appendChild(newPrice);
}

function addRating(newPhone, prod){
    let newRating = document.createElement("p");
    newRating.textContent = "Rating: " + prod.rating;
    newRating.style.textAlign = "center";
    newRating.style.border = "2px solid black";
    newRating.style.borderRadius = "5px";
    newPhone.appendChild(newRating);
}
