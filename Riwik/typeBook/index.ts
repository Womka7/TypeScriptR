const domain: string ='http://190.147.64.47:5155/';
const endpointLogin: string ='api/v1/auth/login';

interface BodyRequestLogin{
    email:string,
    password:string
}
interface BodyResponseLogin{
    message:string,
    data: Record<string, string>
}

async function postLogin(data: BodyRequestLogin):Promise<BodyResponseLogin> {
    const headers:Record<string, string> ={
        'Content-Type': 'application/json'
        // 'Authorization': 'Bearer <token>'
    }
    const reqOptions: RequestInit={
        method: 'POST',
        headers:headers,
        body: JSON.stringify(data)
    }
    const url: string= domain + endpointLogin;
    const result:Response = await fetch(url, reqOptions);
    
    console.log(`Status code: ${result.status}`);
    if(result.status !== 201) {
        console.log(`Response body: ${(await result.json()).message}`);
        throw new Error("Not authenticated: ");
    }
    const responseBodyLogin:BodyResponseLogin= await result.json();
    console.log(`Result token: ${responseBodyLogin.data.token}`);
    
    return responseBodyLogin;
}

const dataToLogin:BodyRequestLogin={
    email: 'prueba@prueba.pru',
    password: 'C0ntr4S3gu++r4'
}
postLogin(dataToLogin).then((result:BodyResponseLogin):void=>{
    console.log(result);
}).catch((error):void=>{
    console.log(` =( : ${error})`);

})