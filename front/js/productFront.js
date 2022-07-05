/*
** single product page
*/





//get _id of product from query parameters
const queryString = window.location.search;
let splitForId = queryString.slice(5);
console.log(splitForId);

const newUri = 'http://localhost:3000/api/products/' + splitForId;

//fetch the new URI from get request
fetch(newUri) 
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        createIndividualProductView(data);
        populateDropdown(data);
}); //gives back an individual object

// dont need iterate over object to get keys / values -
// already have in the console


//populate data, image ,description, price using keys/values
function createIndividualProductView(data) {
    //Dom access to existing ids + classes
    let individualProductName = document.getElementById('title');
    let individualProductPrice = document.getElementById('price');
    let individualProductDescription = document.getElementById('description');
    
    let imgParent = document.getElementById('item__img');

    // create element 
    let individualProductImg = document.createElement('img');

    //populate 
    individualProductName.innerText = data.name;
    individualProductPrice.innerText = data.price;
    individualProductDescription.innerText = data.description;
    individualProductImg.src = data.imageUrl;

    
    
    //append
    imgParent.appendChild(individualProductImg);

    return createIndividualProductView;
}

//function for populating the dropdown logic - decomposition into smallest parts
//I have the array I want to access nested within the object 
//Access the array
//iterate over the array
//Access the dom 
//populate the dom 
//append to dom

const populateDropdown = (data) => {
    //access select node
    let select = document.getElementById('colorsParent');
    //Access the array
    const colors = data.colors;
    //iterate over the array
    for(let i = 0; i < colors.length; i++) {
        //create elements 
        let dropdownSelector = document.createElement('option');
        //populate the selector
        dropdownSelector.innerText = data.colors[i]; //needed [i] otherwise options would be on one line
        //append
        select.appendChild(dropdownSelector);
    }
}








//onClickEvent - button, add to cart.
//-----no duplicates? if else statement / switch
//-----keep local storage syned to the cart, if else

