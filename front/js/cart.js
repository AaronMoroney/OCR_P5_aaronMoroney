/*
** Cart Page 
*/

/*
--------
logic(1): MY POV
--------

get access to the data stored in local storage | done
turn the JSON into Javscript Object Array  | done
loop through the data to get access to it 
use the data to populate any neccessary elements on the cart page -
    _id, option, quantity 
    remove button
Add! line price = unitPrice + quantity = line price
add up all line price = total price 
Add! function to change option / quantity
*/



//get access to the data stored in local storage
let cart = JSON.parse(localStorage.getItem('scart'));

//turn into workable data
console.log('cart', cart);

//loop through the data to get access to it

let cartLenght = cart.length;
for (let i = 0; i < cartLenght; i++) {
    console.log('loopedCart', cart[i]);
    populateCartInfo(cart[i]);
}

/*
use the cart to populate any neccessary
elements on the cart page 
*/
function populateCartInfo(cart) {
    //get access
    let section = document.getElementById('cart__items');
    //create dom elements in order
    //parent
    let article = document.createElement('div');
    article.setAttribute('class', 'cart__item');
    section.appendChild(article);
    //image
    let cartItemImgP = document.createElement('div');
    cartItemImgP.setAttribute('class', 'cart__item__img');
    article.appendChild(cartItemImgP);

    let img = document.createElement('img');
    img.setAttribute('class:','img' );
    cartItemImgP.appendChild(img);
    //contentParent
    let contentP = document.createElement('div');
    contentP.setAttribute('class', 'cart__item__content');
    article.appendChild(contentP);
    //description Parent
    let contentDescriptionP  = document.createElement('div');
    contentDescriptionP .setAttribute("class", "cart__item__content__description");
    contentP.appendChild(contentDescriptionP);
    //productName
    let nameOfProduct = document.createElement('h2');
    nameOfProduct.setAttribute('class', 'product__name');
    contentDescriptionP.appendChild(nameOfProduct);
    //color
    let color = document.createElement('p');
    color.setAttribute('class', 'item__color');
    contentDescriptionP.appendChild(color);
    //price
    let price = document.createElement('p');
    price.setAttribute('class', 'item__price');
    contentDescriptionP.appendChild(price);
    //settingsParent
    let contentSettingsP = document.createElement('div');
    contentSettingsP.setAttribute('class', 'cart__item__content__settings');
    contentP.appendChild(contentSettingsP);
    //quantity Parent
    let contentSettingsQuantityP  = document.createElement('div');
    contentSettingsQuantityP.setAttribute('class', 'cart__item__content__settings__quantity');
    contentSettingsP.appendChild(contentSettingsQuantityP);
    //quantity
    let chosenQ = document.createElement('p');
    chosenQ.setAttribute('class', 'chosenQ');
    contentSettingsQuantityP.appendChild(chosenQ);
    //quantity Input
    let itemQuantity = document.createElement('input');
    itemQuantity.setAttribute('type', 'number');
    itemQuantity.setAttribute('id', 'itemQuantity');
    itemQuantity.setAttribute('name', 'itemQuantity');
    itemQuantity.setAttribute('min', '1');
    itemQuantity.setAttribute('max', '100');
    itemQuantity.setAttribute('value', '');
    contentSettingsQuantityP.appendChild(itemQuantity);
    //deleteParent
    let contentSettingsDeleteP  = document.createElement('div');
    contentSettingsDeleteP.setAttribute('class', 'cart__item__content__settings__delete');
    contentSettingsP.appendChild( contentSettingsDeleteP);
    //delete
    let deleteItem = document.createElement('p');
    deleteItem.setAttribute('class', 'deleteItem');
    contentSettingsDeleteP.appendChild(deleteItem);

    //populate 
    img.src= cart.image;
    nameOfProduct.innerText = cart.name;
    color.innerText = cart.color;
    price.innerText = '€' + cart.price;
    chosenQ.innerText = 'quantity :' 
    itemQuantity.value = cart.quantity; 
    deleteItem.innerText = 'Delete';

    localStorage.setItem('scart', cart);

    return populateCartInfo;
}



/*

// from OpenClassRooms
--------------------
Recommendations: dealing with any modifications or 
removals of products on the cart page 
--------------------

● Furthermore, the Element.closest() method should allow you to target the -
product you want to delete (or modify the quantity) thanks to its ID and its color.

Make sure you modify both the DOM and LocalStorage, 
if you forget the latter then modifications made in the cart will 
not be saved when a user moves to a different web page or refreshes the page.
*/

/*
** quantity **

use the addEventListener, change event to -
access the neccesary dom elements, and their values
check for changes to quantity + add to existing cart
put into storage 

*/

//access the neccesary dom elements
let input = document.getElementById('itemQuantity');
//use the addEventListener, change event to - check for changes to quantity
input.addEventListener('input', updateValue);
function updateValue(event) {
    console.log(event.target.value);
    //check for changes to quantity input + add to existing cart
    cart[0].quantity = event.target.value;
    //check
    console.log(cart);
    //store back in local storage
    localStorage.setItem('scart', cart);
}

/*
** delete **

access dom elements,
add event listener on click, (delete)
if (id && color are the same)
Element.closest(css selector)
clear storarage
on button 'commander' button - click, run the function
_________
*/





































/*
** | Faizal notes, dont code on top of something you don't understand 
** | don't over engineer the code, keep it as simple as possible 
** | First, understand the logic functionality of the app in english
** | then, ap[ply it in pseudo code
** | then, code
** | don't waste time, coding at random, debugging -
** | things that shouldn't be there in the first
*/





