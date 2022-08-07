/*
** confirmation page
*/

//extract the order ID from the url
//populate the conformation tab with it 

/*
** populate the order id confirmation
*/

//get query string

const queryString = window.location.search;
console.log(queryString);
let confirmationNumber = queryString.slice(2);
console.log(confirmationNumber);

//dom access

let orderId = document.getElementById('orderId');
orderId.innerText = confirmationNumber;
