/*
** Cart Page 
*/

/* from OpenClassRooms
--------------------
Recommendations(1): Display a recap which displays all previously added articles
--------------------
● From the cart page you should collect the cart (the array) via LocalStorage.
● Have a look at the array.
● Create and insert the elements on the cart page.
--------------------
Issues to be aware of:
--------------------
Make sure you don’t create any duplicates of the various elements -
in the recap table (the cart). If there are several identical products -
(same ID + same colour) they should be listed on the same row in the table.

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


// <p>Qté : </p>
//<input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42"></input>
function populateCartInfo(cart) {
    //access dom elements 
    let cartItemsParent = document.getElementById('cart__items');
    //create dom elements (parents) 
    let article = document.createElement('article');
    article.setAttribute('class', 'cart__item');
    cartItemsParent.appendChild(article);

    let cartItemImgP = document.createElement('div');
    cartItemImgP.setAttribute('class', 'cart__item__img');
    article.appendChild(cartItemImgP);

    let cartItemContentP = document.createElement('div');
    cartItemContentP.setAttribute('class', 'cart__item__content');
    article.appendChild(cartItemContentP);

    let cartItemContentSettingsP = document.createElement('div');
    cartItemContentSettingsP.setAttribute('class', 'cart__item__content__settings');
    cartItemContentP.appendChild(cartItemContentSettingsP);
    //get accerss to dom elements (Children)
    let cartItemContentDescriptionP  = document.createElement('div');
    cartItemContentDescriptionP .setAttribute("class", "cart__item__content__description");
    cartItemContentP.appendChild(cartItemContentDescriptionP);

    let cartItemContentSettingsQuantityP  = document.createElement('div');
    cartItemContentSettingsQuantityP.setAttribute('class', 'cart__item__content__settings');
    cartItemContentP.appendChild(cartItemContentSettingsP);

    let cartItemContentSettingsDeleteP  = document.createElement('div');
    cartItemContentSettingsQuantityP.setAttribute('class', 'cart__item__content__settings__delete');
    cartItemContentSettingsP.appendChild(cartItemContentSettingsQuantityP);
    //get accerss to dom elements (Grandchildren)
    //<h2>Name of the product</h2>
    let nameOfProduct = document.createElement('h2');
    nameOfProduct.setAttribute('class', 'product__name');
    cartItemContentDescriptionP.appendChild(nameOfProduct);

    let color = document.createElement('p');
    color.setAttribute('class', 'item__color');
    cartItemContentDescriptionP.appendChild(color);
    //<p>€42.00</p>

    let price = document.createElement('p');
    price.setAttribute('class', 'item__price');
    cartItemContentDescriptionP.appendChild(price);

    //<p class="deleteItem">Delete</p>
    let deleteItem = document.createElement('p');
    deleteItem.setAttribute('class', 'delete__item');
    cartItemContentSettingsDeleteP.appendChild(deleteItem);
    //populate 
    nameOfProduct.innerText = cart.name;
    color.innerText = cart.color;
    price.innerText = cart.price;
    cartItemImgP.src = cart.imageUrl;

    return populateCartInfo;
}

//remove button functionality logic










































/*
--------------------
Recommendations: dealing with any modifications or 
removals of products on the cart page 
--------------------

● As regards modifications, you will have to use change event -
(addEventListener, change event) to enable changes in quantities of product.
● Furthermore, the Element.closest() method should allow you to target the -
product you want to delete (or modify the quantity) thanks to its ID and its color.

Make sure you modify both the DOM and LocalStorage, 
if you forget the latter then modifications made in the cart will 
not be saved when a user moves to a different web page or refreshes the page.

*/





