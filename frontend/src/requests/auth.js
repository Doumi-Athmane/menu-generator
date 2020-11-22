import axios from 'axios'
import env from 'react-dotenv'


export async function signIn(nomAdmin, motDePasse) {
    let res = await axios.post(env.API_URL + "/auth/login", {nomAdmin, motDePasse})
    return res.headers.cookies;
}



