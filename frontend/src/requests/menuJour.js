import api from './api'

export  async function ajouter_menu_de_jour(idPlat) {
    let res = await api.post('/menu' ,{idPlat});
    return res.data;
}

export async function afficher_menu_de_jour(idPlats){
    let res = await api.post(`/generate/`, {idPlats})
    console.log(res)
    return res.data;
}

export async function get_ingrediant_menu(idPlats){
    let res = await api.get(`/menu/${idPlats}/ingrediant`)
    return res.data;
}

