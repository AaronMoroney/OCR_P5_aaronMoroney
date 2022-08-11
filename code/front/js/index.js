/*
** index page (all products)
*/

const URI = 'http://localhost:3000/api/products/';
const SINGLE_PRODUCT_LINK = './productFront.html?=';

/*
** | fetch
*/

fetch(URI) 
    .then((response) => response.json())
    .then((data) => {
        console.log(data); // works without console.log, good for access however
        createProductCardsInfo(data);
});  

/*
** | create product cards 
*/

function createProductCardsInfo(array) {
    const length = array.length;
    for (let i = 0; i<length; i++) {
        createProductCardView(array[i]);
    }
}

/*
** | cards view
*/

function createProductCardView(object) {
    //DOM creation of product descriptor parent - 'article' 
    let article = document.createElement('article');

    //DOM creation of product descriptors + link
    let productName = document.createElement('h3');
    let productDescription = document.createElement('p');
    let img = document.createElement('img');
    let pageLink = document.createElement('a');
   
    //populate
    productName.innerText = object.name;
    productDescription.innerText= object.description;
    
    img.src= object.imageUrl; 
    
    pageLink.href = `${SINGLE_PRODUCT_LINK} ${object._id}`;  // need to edit this
    
    //append created product description parent to link parent - 
    items.appendChild(pageLink); //link  to parent
    pageLink.appendChild(article); //product description parent to link

    //append product descriptors to article ( in order )
    article.appendChild(img);
    article.appendChild(productName);
    article.appendChild(productDescription);
}