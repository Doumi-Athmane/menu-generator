import api from './api'

export   async function list_menu(date1 , date2) {
    let res = await api.get(`/menu?date1=${date1}${date2 ? `&date2=${date2}`:''}`);
    return res.data;
    
}

export async function plat_menu(id) {
    let res = await api.get(`/menu/${id}/plat`);
    return res.data;
}

