import api from './api'

export  async function plat() {
    const res = await api.get('/plat?type=entree');
    const res2 = await api.get('/plat?type=principal');
    const res3 = await api.get('/plat?type=dessert');
    return {
        entree: res.data,
        principal: res2.data,
        dessert: res3.data
    };
}

export async function ingrediants(id) {
    const res = await api.get(`/plat/${id}/ingrediant`);
    return res.data;
}

export async function ajouter({nom, prix, fixe, type, ingrediants, choix}) {
    const res = await api.post('/plat', {
        plat: {
            nom,
            prix,
            fixe
        },
        type,
        ingrediants,
        choix
    });

    return res.data;
}

export async function supprimer({id}) {
    const res = await api.delete(`/plat/${id}`);

    return res.data;
}

export async function modifier({id, nom, prix, fixe, type, choix, ingrediants}) {
    const res = await api.put(`/plat/${id}`, {nom, prix, fixe, type, choix, ingrediants});
    return res.data;
}