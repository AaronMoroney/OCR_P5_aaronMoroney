/*
** single product page
*/

//get _id of product from query parameters
const QUERY_STRING = window.location.search;
console.log(QUERY_STRING);
let PRODUCT_ID = QUERY_STRING.slice(5);
console.log(PRODUCT_ID);

const PRODUCT_URI = 'http://localhost:3000/api/products/' + PRODUCT_ID;
let product;

/*
** fetch
*/

//fetch the new URI from get request
fetch(PRODUCT_URI) 
    .then((response) => response.json())
    .then((data) => {
        product = data;
        console.log(data)
        createIndividualProductView(data);
        populateDropdown(data);
        
}); //gives back an individual object

/*
** create Product View
*/

//populate data, image ,description, price using key/value
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
}

/*
** Populate Dropdown
*/

//Populates the dropdown menu with the color info
//of each product

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

/*
** | //error handling for users adding product to cart
*/

//triggered by add event listener
//add event listener calls below function

var button = document.getElementById('addToCart'); 
button.addEventListener('click', () => { 
  var option = document.getElementById('colorsParent').value;
  //if color is unselected alert user
  if (option == '') {
    alert('please select an item color choice from the dropdown menu');
    return;
  }
  //if value of selector is 0, throw error message
  var quantity = document.getElementById('quantity').value; 
  var interestedProduct = {_id: product._id, color: option, quantity: parseInt(quantity), name: product.name, description: product.description, image: product.imageUrl, price: product.price, altText: product.altText};
  if (quantity == 0) {
    alert('please select a value');
    return; 
  }
  console.log(interestedProduct); //array
  //call function
  addToShoppingCart(interestedProduct); 
});

/*
** | add to shopping cart functionality
*/

function addToShoppingCart (interestedProduct) {
  let cart = JSON.parse(localStorage.getItem('scart')) || [];
  //get a list of selected products from the shopping cart, using product data + interestedProduct
  var foundProduct = cart.filter((item) => item._id == interestedProduct._id && item.color == interestedProduct.color);
  console.log(foundProduct);
  //if list is empty, immediately push selection to shopping cart. 
  if (foundProduct.length == 0) { 
    cart.push(interestedProduct);
    console.log('scart:', cart); 
    //store object in local storage
    localStorage.setItem('scart', JSON.stringify(cart));
  } else {
    foundProduct[0].quantity = interestedProduct.quantity + foundProduct[0].quantity;
    console.log(foundProduct[0]);
    console.log(cart);
    //re-store data in local storage
    localStorage.setItem('scart', JSON.stringify (cart));
  }
}