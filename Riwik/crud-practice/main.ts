import { Storecontroller } from "./src/controllers/Store.controller";

const url = 'https://api.escuelajs.co/api/v1/'

async function showData() {
    const storeController = new Storecontroller(url);
    try {
        const data = await storeController.getData('products');
        console.log( data);
        
        return data;
    } catch (e) {
        
        console.log(e);
    }
    
}

showData()