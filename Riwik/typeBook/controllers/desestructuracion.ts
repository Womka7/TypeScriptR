
//desestructuracion
const book ={title:"Cien años de soledad", author:"Gabo",description:"xyz"};
const {title, description}=book;

console.log(description);


//----------------------------------------------
// desustructuracion con alias
const author={firstName:"Gabriel",secondName:"Marquez"};
const{firstName:name1}=author;
console.log(name1);

//----------------------------------------------
// desustructuracion valor por defecto
const product={nameProduct:"xbox",price:1000,color:undefined}
const{nameProduct,color='black'}=product;

//----------------------------------------------
// Arreglos
let coders=[1,2,3,4,5];
const [ coder1,coder2, coder3]=coders
console.log(coder1)
console.log(coder2,coder3);
coders=[5,9,8]
console.log(coder1)
console.log(coder2,coder3);

//----------------------------------------------
// Arreglos (omitir elemnto)

const tls =['Milton','Kevin','Robin','Nico'];
const [tl1,,tl2]=tls
console.log(tl1,tl2);

//----------------------------------------------
// Arreglos (valor por defecto)
const ages =[30,25,18]
const[firstAge,secondAge,threeAge,newAge=60]=ages;
console.log(firstAge,newAge);//30,60
console.log(ages); //[30,25,18]

//----------------------------------------------
const ages1 =[30,25,18,59]
const[firstAge1,secondAge1,threeAge1,newAge1=60]=ages1;
console.log(firstAge,newAge); //30,59


//----------------------------------------------
// Desestructuración anidada
const response={message:'OK',ip:'192.168.1.1', data:{first:"Gabito",second:"Marquez"}};

const {data:{first}}=response;
console.log(response.data.second);
//similar
console.log(first);
 