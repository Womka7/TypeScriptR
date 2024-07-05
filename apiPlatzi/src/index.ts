import { IResponseProducts } from "../src/interface/i-response-products.js"

const sectionProducts=document.querySelector(".section-products") as  HTMLElement;

async function llamadoApi():Promise<void> {
    const response= await fetch ("https://api.escuelajs.co/api/v1/products");
    const productsApi:IResponseProducts[] =await response.json();
    insertCards(productsApi);
   
}

function insertCards(productsApi:IResponseProducts[]):void {
    productsApi.forEach((product:IResponseProducts,index:number) => {

        if(index<=20){
            sectionProducts.innerHTML +=`
            <article class="cart">
                <h2>${product.title}</h2>
                <div id="img-product"><img src="${product.images[0].sp}" alt="Image Product"></div>
                <div id="info-product">
                    <p>${product.price}</p>
                    <span>${product.description}</span>
                    <p>${product.category.name}</p>
                </div>
            </article>
        `
        }
        
    });
}

llamadoApi()