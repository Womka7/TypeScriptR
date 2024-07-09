import { HasFormatter } from "../interfaces/HasFormatter.js";

class ListTemplate{
    private container: HTMLUListElement;
    constructor(container: HTMLUListElement){
        this.container=container;
    }

    render( item: HasFormatter, heading: string, pos:"start"|"end"){
        const li= document.createElement("li");
        
        const h4= document.createElement("h4");
        h4.innerText=heading;
        li.appendChild(h4);

        const p=document.createElement("p");
        p.innerText=item.format();
        li.append(p);

    }
}