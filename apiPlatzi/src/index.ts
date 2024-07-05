import { IResponseProducts } from "../src/interface/i-response-products.js"

const sectionProducts=document.querySelector(".section-products") as  HTMLElement;

async function llamadoApi():Promise {
    const response= await fetch ("https://api.escuelajs.co/api/v1/products");
    const productsApi=await response.json();

    productsApi.forEach(product:  => {
        sectionProducts.innerHTML +=`
        
        `
        
    });
}

