const uri = 'http://localhost:3000/api/products/';
let pageLink = "./product.html?";






fetch(uri) 
    .then((response) => response.json())
    .then((data) => {
        console.log(data); // works without console.log, good for access
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
    const productName = document.createElement('h3');
    const productDescription = document.createElement('p');
    const img = document.createElement('img');
    
    const pageLink = document.createElement('a');
   

    //populate
    productName.innerText = object.name;
    productDescription.innerText= object.description;
    img.src= object.imageUrl; // previous img method was causing bug - wouldn't fetch
    pageLink.href = (`${pageLink} ${object._id}`);

    //append created product parent to section parent - id=items
    items.appendChild(pageLink);
    pageLink.appendChild(article);


    //append product descriptors to article ( in order )
    article.appendChild(img);
    article.appendChild(productName);
    article.appendChild(productDescription);
    
    return createProductCardView;
}















//------------------------------------

/* faizal way

let products = [];

fetch(uri) done
.then((response) => response.json()) done
.then((data) => { done
     //console.log(data); done
     products = data; done
     //populate the DOM 
     //loop on the map, for each item, create a text html and populate the data, add to the parent element
    var name = `${products}regertgegb`;
});
*/

//------------------------------------







