
const uri = 'http://localhost:3000/api/products/';
import fetch from "node-fetch";

fetch(uri)
.then((response) => response.json())
.then((data) => console.log(data));