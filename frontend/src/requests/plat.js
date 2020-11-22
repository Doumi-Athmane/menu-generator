import api from './api'

export default  async function plat() {
    const res = await api.get('/plat?type=entree');
    const res2 = await api.get('/plat?type=principal');
    const res3 = await api.get('/plat?type=dessert');
    return {
        entree: res.data,
        principal: res2.data,
        dessert: res3.data
    };
}