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
    let optionListParent = document.getElementById('colors');
    let optionList = document.getElementsByTagName('option');
   
    
    // create element 
    let individualProductImg = document.createElement('img');


    //populate 
    individualProductName.innerText = data.name;
    individualProductPrice.innerText = data.price;
    individualProductDescription.innerText = data.description;
    individualProductImg.src = data.imageUrl;
    optionList.value = data.colors;

    //populate Options
    /*for(var i = 0, l = optionList.length; i < l; i++){
        var option = optionList[i];
        optionList.options.add(new Option(option.text, option.value, option.selected) );
    }
    */

    //append
    imgParent.appendChild(individualProductImg);
    
    return createIndividualProductView;
}






//onClickEvent - button, add to cart.
//-----no duplicates? if else statement / switch
//-----keep local storage syned to the cart, if else
