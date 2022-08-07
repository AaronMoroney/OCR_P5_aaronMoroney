/*
** Cart Page 
*/

/*
--------
logic
--------

get access to the data stored in local storage | done
turn the JSON into Javscript Object Array  | done
loop through the data to get access to it 
use the data to populate any neccessary elements on the cart page -
_id, option, quantity 
remove button
*/




//get access to the data stored in local storage
let cart = JSON.parse(localStorage.getItem('scart'));
//let cart = JSON.parse(localStorage.getItem('scart')) || [];
//let cart = JSON.stringify(localStorage.setItem('scart', cart));

//turn into workable data
console.log('cart:', cart);
//loop through the data to get access to it

for (let i = 0; i < cart.length; i++) {
    populateCartInfo(cart[i]);
    var loopResult = (cart[i]);
    console.log(loopResult);
}

function populateCartInfo(cart) {
    //get access
    let section = document.getElementById('cart__items');
    //create dom elements in order
    //parent
    let article = document.createElement('div');
    article.setAttribute('class', 'cart__item');
    article.setAttribute('data-id', '{product-ID}')
    article.setAttribute('data-color', '{product-color}')
    section.appendChild(article);
    //image
    let cartItemImgP = document.createElement('div');
    cartItemImgP.setAttribute('class', 'cart__item__img');
    article.appendChild(cartItemImgP);

    let img = document.createElement('img');
    img.setAttribute('class','img' );
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
    itemQuantity.setAttribute('class', 'itemQuantity');
    itemQuantity.setAttribute('id', 'itemQuantity');
    //itemQuantity.setAttribute('name', 'itemQuantity');
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

    //!!don't restore here, caues JSON error!!
    
    return populateCartInfo;
}

/*
use the cart to populate any neccessary
elements on the cart page 
*/

/*
**quantity **
**access dom
**loop through class results (potential for multiple)
**use the addEventListener, change event to trigger
**loop through cart, to access individual items
**add quantity changes to existing cart
*/

//closest so far
//creates 1 cart on click,
//works on all items 
//but! populates all items with updated quantity

/*
//get access to dom elements
let input = document.getElementsByClassName('itemQuantity');
console.log(input);
console.log('input.length', input.length);
//interate through and add event listener to each
//loop through
for(var i = 0; i < input.length; i++) { 
input[i].addEventListener('input', updateValue); //working
//attach value function to the lister
function updateValue(event) {
    console.log(event.target.value); //working
        loopResult.quantity = parseInt(event.target.value); 
        console.log('cart:', cart);
    }
}
*/


//var filter = cart.filter((item) => item.id = loopResult._id && item.color == loopResult.color);
//console.log(filter);

//creates multiple carts
//get access to dom elements
/*
let input = document.getElementsByClassName('itemQuantity');
//loop through array of returned classes
console.log(input)
for (var i = 0; i < input.length; i++) {
    var addQuantity = input[i];
    addQuantity.addEventListener('input', updateValue);
    //trigger update value on change 
    function updateValue(event) {
        console.log(event.target.value);
        //loop through cart data for workable data
        for (let i = 0; i < cart.length; i++) {
                console.log(cart);
                //pushes quantity into the available indexes of cart items
                cart.quantity = parseInt(event.target.value); 
            }
        }
    }


*/
/*
** delete **

access dom elements,
add event listener on click, (delete)


*/ 

/*
//access dom elements,
let removeCartItemButtons = document.getElementsByClassName('deleteItem');
console.log(removeCartItemButtons);
for ( var i = 0; i <  removeCartItemButtons.length; i ++) {
    var deleteItem = removeCartItemButtons[i];
    //add event listener on click, (delete)
    deleteItem.addEventListener('click', function (event) {
        console.log('clicked')//working;
        deleteItemClicked = event.target;
        //remove parent
        deleteItemClicked.parentElement.parentElement.parentElement.parentElement.remove();
        //window.localStorage.removeItem('');
        //localStorage.setItem('scart', JSON.stringify (cart));
    })
}
*/



//access dom elements,
let removeCartItemButtons = document.getElementsByClassName('deleteItem');
console.log(removeCartItemButtons);
for ( var i = 0; i <  removeCartItemButtons.length; i ++) {
    var deleteItem = removeCartItemButtons[i];
    //add event listener on click, (delete)
    deleteItem.addEventListener('click', function (event) {
        console.log('clicked')//working;
        deleteItemClicked = event.target;
        //remove parent
        deleteItemClicked.parentElement.parentElement.parentElement.parentElement.remove();
        //target product // index returns the index first element satisfies 
        //provided test function
        let index = cart.findIndex(startCart => startCart._id == loopResult._id && startCart.color == loopResult.color);
        console.log(index);
        //remove, -1 == false. so != -1 == true
        if (index !== -1) {
            //splice the first index result off the cart
            cart.splice(index, 1);
            //store new array 
            localStorage.setItem('scart', JSON.stringify (cart));
            console.log('cart after delete', cart);
        }
    })
}












































/*
** | Faizal notes, dont code on top of something you don't understand 
** | don't over engineer the code, keep it as simple as possible 
** | First, understand the logic functionality of the app in english
** | then, ap[ply it in pseudo code
** | then, code
** | don't waste time, coding at random, debugging -
** | things that shouldn't be there in the first
*/





