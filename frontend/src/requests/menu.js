import api from './api'

export async function list_menu(date1 , date2) {
    let res = await api.get(`/menu?date1=${date1}&date2=${date2}`);
    return res.data;
    
}