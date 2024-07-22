"use strict";
//desestructuracion
const book = { title: "Cien años de soledad", author: "Gabo", description: "xyz" };
const { title, description } = book;
console.log(description);
//----------------------------------------------
// desustructuracion con alias
const author = { firstName: "Gabriel", secondName: "Marquez" };
const { firstName: name1 } = author;
console.log(name1);
//----------------------------------------------
// desustructuracion valor por defecto
const product = { nameProduct: "xbox", price: 1000, color: '' };
const { nameProduct, color = 'black' } = product;
