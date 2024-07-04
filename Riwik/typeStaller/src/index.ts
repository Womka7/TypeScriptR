

//EJERICIO NUMERO 1
/* Programa que pide al usuario un numero y muestra si es par o impar*/

const numero1=document.getElementById("numberOne") as HTMLInputElement;
const resultados=document.querySelector(".resultado") as HTMLSpanElement;
const form =document.querySelector(".new-item-form") as HTMLFormElement;

form.addEventListener("submit", (event:Event)=>{
  event.preventDefault();
  console.log(numero1.value);
  
  typeNumber();
  // numero1.value=""  // --- ACA ES PARA LIMPIAR 1 INPUT
  form.reset(); // --- Este es para limpiar o resetear el formulario completo
});

const typeNumber =()=>{
  let dato =numero1.valueAsNumber;
 (dato%2)==0? resultados.innerText="par":resultados.innerText="impar";
}


//EJERICIO NUMERO 2
/*Programa que pide al usuario que ingrese su nombre. Luego, verifica 
si el nombre ingresado no es nulo ni está vacío. Si el nombre es válido, 
muestra un mensaje de bienvenida; de lo contrario, muestra un mensaje de error.*/

const nombre=document.getElementById("nombre") as HTMLInputElement;
const resultado2=document.querySelector(".resultado2") as HTMLSpanElement;
const form2 =document.querySelector(".new-item-form2") as HTMLFormElement;

form2.addEventListener("submit",(event:Event)=>{
  event.preventDefault();
  console.log(nombre.value);
  bienvenida();
  form2.reset();
});

const bienvenida=()=>{
  (nombre.value==='')?resultado2.innerText="Error! debes diligenciar tu nombre":resultado2.innerText=`Bienvenido ${nombre.value}`
}

//EJERICIO NUMERO 3
/* Escribe un programa que pida al usuario su edad y muestre si es mayor o menor de edad usando if-else */
const edad = document.querySelector("#edad-user") as HTMLInputElement;
const resultado3=document.querySelector(".resultado3") as HTMLSpanElement;
const form3=document.querySelector(".new-item-form3")as HTMLFormElement;

form3.addEventListener("submit",(event:Event)=>{
  event.preventDefault();
  console.log(edad.value);
  validación();
  form3.reset();
});

const validación=()=>{
  (edad.valueAsNumber >= 18)?resultado3.innerText="Eres mayor de edad":resultado3.innerText="Eres menor de edad"
}


//EJERICIO NUMERO 4
/* Escribe un programa que pida al usuario un día de la semana (como numero de 1 a 7) y muestre el nombre del día correspondiente usando switch */

const diaSemana=document.querySelector("#dia-semana") as HTMLInputElement;
const resultado4=document.querySelector("#resultado4") as HTMLSpanElement;
const form4=document.querySelector(".new-item-form4") as HTMLFormElement;

form4.addEventListener("submit",(event:Event)=>{
  event.preventDefault();
  console.log(diaSemana.value);

  form4.reset();
})

// const diasSemana
