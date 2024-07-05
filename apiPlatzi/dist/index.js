var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const sectionProducts = document.querySelector(".section-products");
function llamadoApi() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("https://api.escuelajs.co/api/v1/products");
        const productsApi = yield response.json();
        insertCards(productsApi);
    });
}
function insertCards(productsApi) {
    productsApi.forEach((product, index) => {
        if (index <= 20) {
            sectionProducts.innerHTML += `
            <article class="cart">
                <h2>${product.title}</h2>
                <div id="img-product"><img src="${product.images[0].sp}" alt="Image Product"></div>
                <div id="info-product">
                    <p>${product.price}</p>
                    <span>${product.description}</span>
                    <p>${product.category.name}</p>
                </div>
            </article>
        `;
        }
    });
}
llamadoApi();
export {};
