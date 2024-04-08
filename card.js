// async function displayProduct() {
//   let product = await fetch("https://dummyjson.com/products");

//   let finalProduct = await product.json();
//   console.log(finalProduct);
//   card = finalProduct.products;
//   console.log("cards", card);
//   let productDiv = document.querySelector(".listProduct");
// let btnEle = document.createElement("button")
// let btnText = document.createTextNode("Add to Cart");


//   let html = "";

//   card.map((list) => {html += `  <div class="card">
//     <img src=${list.thumbnail} class="img-fluid card-img" alt="..." >
//     <h2 class="card-title">${list.title}</h2>
//     <a href="#" class="btn btn-primary">${list.price}</a>

//   </div>`
//   productDiv.appendChild(btnText);
// } ); 
  

//   productDiv.innerHTML=html
// }
// displayProduct();


//****************************** */

let renderData = document.querySelector(".renderData");

async function getData(){
let res = await fetch("https://dummyjson.com/products");
let finalres = await res.json();


//used to convert object into array
let arrayData = Object.entries(finalres);
console.log(arrayData)


 // Check if arrayData is an array
console.log(Array.isArray(arrayData));


 arrayData.map((ele) => {
 let createImgEle = document.createElement("img");
  createImgEle.setAttribute("src", ele.products[0].thumbnail);

  renderData.appendChild(createImgEle)

 })


}

getData(); 

// let renderData = document.querySelector(".renderData");

// async function getData() {
//     let res = await fetch("https://fakestoreapi.com/products");
//     let finalres = await res.json();

//     // Check if finalres is an array
//     console.log(Array.isArray(finalres));

//     finalres.map((ele) => {
//         let createImgEle = document.createElement("img");
//         createImgEle.setAttribute("src", ele.image);

//         renderData.appendChild(createImgEle);
//     });
// }

// getData();
