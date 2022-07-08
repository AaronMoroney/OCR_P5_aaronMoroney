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


//check, if product is already in array using if / else


function cartButtonPush(data) {
  //get access to button + quantity + options
  
  

    

    
}

  //console.log(localStorage.getItem('productChoice')); 
var button = document.getElementById('addToCart');  //console.log(button); working
button.addEventListener('click', () => { 
    var option = document.getElementById('colorsParent').value;
    var quantity = document.getElementById('quantity').value; 
    var cart = {_id: product, color: option, quantity: quantity };
    console.log(cart); //undefined option and quantity
    let shoppingCart = localStorage.getItem('cart') || []; //
    //console.log(localStorage.setItem('cart', JSON.stringify(cart))); //push to something that isnt
    shoppingCart.push(cart);
    console.log(shoppingCart);
    console.log(product._id);
});


  


      //push select data + quantity data
    /*if (data._id === data._id && data.option === data.option) {
       console.log(data.quantity++);
    };
    */