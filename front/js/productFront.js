/*
** single product page
*/

//get _id of product from query parameters
const queryString = window.location.search;
let splitForId = queryString.slice(5);
console.log(splitForId);

const newUri = 'http://localhost:3000/api/products/' + splitForId;
let product;

//fetch the new URI from get request
fetch(newUri) 
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        createIndividualProductView(data);
        populateDropdown(data);
        product = data;
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

/*function for populating the dropdown logic - decomposition into smallest parts
I have the array I want to access nested within the object 
Access the array
iterate over the array
Access the dom 
populate the dom 
append to dom
*/

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
** | from openClassRooms 
*/

/* cart can be made as an array containing three things
- product id, quanitity, color
use localStroage to access this array
when you add a product to the cart, add a new element to the array
when you add the exact same product, increase the quantity 
*/


//console.log(localStorage.getItem('productChoice')); 
var button = document.getElementById('addToCart');  //console.log(button); working
button.addEventListener('click', () => { 
    
    var option = document.getElementById('colorsParent').value;
    var option = document.getElementById('colorsParent').value;
    //if color is unselected alert user
    if (option == '') {
    alert('please select an item color choice from the dropdown menu');
    }
    //if value of selector is 0, throw error message
    var quantity = document.getElementById('quantity').value; 
    var interestedProduct = [{_id: product._id, color: option, quantity: parseInt(quantity), name: product.name, description: product.description, image: product.imageUrl, price: product.price, altText: product.altText}];
    console.log(interestedProduct); //array
    addToShoppingCart(interestedProduct); //selected item
});

function addToShoppingCart (interestedProduct) {
  let cart = JSON.parse(localStorage.getItem('scart')) || [];
  //get a list of selected products from the shopping cart, using product data + interestedProduct
  var foundProduct = cart.filter((item) => item._id == interestedProduct._id && item.color == interestedProduct.color) ;
  //foundProduct[0].quantity = interestedProduct[0].quantity;
  console.log(foundProduct);
  //if list is empty, immediately push selection to shopping cart. 
  if (foundProduct.length == 0) { //should use length
    cart.push(interestedProduct);
    console.log('scart:', cart); //working perfectly
    //store object in local storage
    localStorage.setItem('scart', JSON.stringify(cart));
    } else  {
      console.log(cart);
      foundProduct[0].quantity = interestedProduct.quantity + foundProduct[0].quantity;
      console.log(foundProduct[0]);
      cart.push(interestedProduct);
      //re-store data in local storage
      localStorage.setItem('scart', JSON.stringify(cart));
    }
  }


