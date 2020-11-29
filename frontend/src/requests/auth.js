import axios from 'axios'
import Cookie from 'js-cookie'
import {host} from './api'

let api = `${host}/api/auth`

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





