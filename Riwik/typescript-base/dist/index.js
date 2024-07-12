"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Invoice_js_1 = require("./classes/Invoice.js");
const Payment_js_1 = require("./classes/Payment.js");
const ListTemplate_js_1 = require("./classes/ListTemplate.js");
// const invOne = new Invoice("Steven", "Work in riwi", 200);
// const invTwo = new Invoice("Jairo", "Work in the website", 800);
// let invoices: Invoice[] = [invOne, invTwo];
const form = document.querySelector(".new-item-form");
// console.log(form.children);
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const ul = document.querySelector(".item-list");
const list = new ListTemplate_js_1.ListTemplate(ul);
form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    let doc;
    if (type.value == "invoice") {
        doc = new Invoice_js_1.Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment_js_1.Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, "end");
});
// console.log(invoices);
