const domain: string ='http://190.147.64.47:5155/';
const endpointLogin: string ='api/v1/auth/login';

interface BodyRequestLogin{
    email:string,
    password:string
}

async function postLogin(data: BodyRequestLogin):Promise<void> {
    const headers:Record<string, string> ={
        ''
    }
}