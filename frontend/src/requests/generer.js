import api from './api'

export default async function plats_non_utilise() {
    let res = await api.get('/plat/menu');
    return res.data;
}