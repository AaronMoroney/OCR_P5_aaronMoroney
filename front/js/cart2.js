
let cart = JSON.parse(localStorage.getItem('scart')) || [];

//turn into workable data
console.log('cart:', cart);
//loop through the data to get access to it
for (let i = 0; i < cart.length; i++) {
    populateCartInfo(cart[i]);
    var loopResult = (cart[i]);
    console.log('loopResult', loopResult);

    //call functions, in an on load function async??
    deleteCartItem();
    updateQuantityCartItem ();
    updateCartTotal ()
}


/*
function populateCartInfo(cart) {
    //get access
    let section = document.getElementById('cart__items');
    //create dom elements in order
    //parent
    let article = document.createElement('div');
    article.setAttribute('class', 'cart__item');
    article.setAttribute('data-id', `${cart._id}`)
    article.setAttribute('data-color', `${cart.color}`)
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
    //totals
    let cartPrice = document.getElementsByClassName('cart__price');
    //access + populate dynamically using result of below function - 
    //updateCartTotal
    let totalQuantity = document.getElementById('totalQuantity'); //span, inner html
    let totalPrice = document.getElementById('totalPrice');
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
*/




/*
** delete functionality
*/

//not deleting from localstroage correctly
//problem with findIndex?
//specififcity of the click

/*

function deleteCartItem () {
//access dom elements,
    let removeCartItemButtons = document.getElementsByClassName('deleteItem');
    console.log(removeCartItemButtons);
    for ( var i = 0; i <  removeCartItemButtons.length; i ++) {
        var deleteItem = removeCartItemButtons[i];
        //add event listener on click, (delete)
        deleteItem.addEventListener('click', function (event) {
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
}
*/

/*
** quantity functionality
*/

//problem with the specificity of updated QTY's
//test

/*
function updateQuantityCartItem () {
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
}
*/

/*

// <div class="cart__price"<p>Total (<span id="totalQuantity"><!-- 2 --></span> articles) : €<span id="totalPrice"><!-- 84.00 --></span></p>

function updateCartTotal () {


}


function captureFormData () {

}
*/