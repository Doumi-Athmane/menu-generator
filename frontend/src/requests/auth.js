import axios from 'axios'
import Cookie from 'js-cookie'

let api = "http://localhost:3500/api/auth"

export async function signIn(nomAdmin, motDePasse) {
    let res = await axios.post(api + "/login", {nomAdmin, motDePasse})
    return res.data;
}

export async function verify() {
    let res = await axios.get(api + "/verify", {headers: {
        "Authorization": `Bearer ${Cookie.get("token")}`
    }});
    return res.data.status;
}





