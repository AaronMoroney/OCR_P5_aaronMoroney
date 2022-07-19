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
/*
<!--  <article class="cart__item" data-id="{product-ID}" data-color="{product-color}">

  


 

   
  </div>
</div>
// <p>Qté : </p>
//<input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42"></input>
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
    itemQuantity.setAttribute('type', 'itemQuantity');
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





