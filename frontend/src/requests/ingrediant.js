import api from './api'

export async function list_ingrediants() {
    let res = await api.get('/ingrediant');
    return res.data;
    
}


export async function supp_ingrediant(id) {
    let res = await api.delete(`/ingrediant/${id}`);
    return res.data;
    
}

export async function ajouter_ingrediant (nom){
    let res = await api.post(`/ingrediant/`)
}