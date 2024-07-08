//la estructura de un objeto
interface IUser{
  firsName: string;
  lastName:string;
  age:number;
  skills?:string[];
  gretting():void;
}
/* otra manera de ver una interface
type IUser={
  firsName: string;
  lastName:string;
  age:number;
  skills:string[];
  gretting():void;
}
*/
const user1:IUser={
  firsName:"Stiven",
  lastName:"zuluaga",
  age:28,
  skills:["reactjs","English","backend"],
  gretting(){
    console.log("Hello World");
  }
}

//http://jsonplaceholder.typicode.com/posts  Interface a esta api

interface IPost{
  userId:number,
  id:number,
  title:string,
  body:string
}
const getPosts= async ()=> {
  const response:Response = await fetch("http://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  console.log(data);
};

getPosts();