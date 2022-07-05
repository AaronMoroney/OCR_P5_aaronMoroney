
/*
** index page (all products)
*/

const uri = 'http://localhost:3000/api/products/';
const singleProductLink = './productFront.html?=';



fetch(uri) 
    .then((response) => response.json())
    .then((data) => {
        console.log(data); // works without console.log, good for access however
        createProductCardsInfo(data);
});
    

function createProductCardsInfo(array) {
    const length = array.length;
    for (let i=0; i<length; i++) {
        createProductCardView(array[i]);
    }
}

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
    
    img.src= object.imageUrl; // previous img method was causing bug - wouldn't fetch
    
    pageLink.href = `${singleProductLink} ${object._id}`;  // need to edit this
    
    //append created product description parent to link parent - 

    items.appendChild(pageLink); //link  to parent
    pageLink.appendChild(article); //product description parent to link

    //append product descriptors to article ( in order )
    article.appendChild(img);
    article.appendChild(productName);
    article.appendChild(productDescription);
    
    return createProductCardView;
}


























