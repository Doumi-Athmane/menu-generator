import api from './api'

export default async function menu_de_jour(idPlats) {
    let res = await api.post('/menu' ,{idPlats});
    return res.data;
}