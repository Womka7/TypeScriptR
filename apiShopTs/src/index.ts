// import { IResponseCategories } from "./interface/i-response-categoriess.js"

import { IResponseProducts } from "./interface/i-response-categoriess";


const sectionProducts=document.querySelector(".section-products") as  HTMLElement;

async function llamadoApi():Promise<void> {
    const response= await fetch ("https://fakestoreapi.com/products");
    const productsApi:IResponseProducts[] = await response.json();
    insertCards(productsApi);
   
}

function insertCards(productsApi:IResponseProducts[]):void {
    productsApi.forEach((product: IResponseProducts,index:number) => {

        if(index<=20){
            sectionProducts.innerHTML +=`
            <article class="cart">
                <div class = "title-container"> <h2>${product.title}</h2> </div>
                
                <div id="img-product" ><img src="${product.image}" alt=${product.title}></div>
                <div class="info">
                    <p id="price">$ ${product.price}</p>
                    <p id="categ">${product.category}</p>
                </div>
            </article>
        `
        }
        
    });
}


llamadoApi()