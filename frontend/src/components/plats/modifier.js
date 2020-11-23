import React, { useState, useEffect } from 'react'
import { WithContext as ReactTags } from 'react-tag-input'
import Button from '../button'
import { list_ingrediants } from '../../requests/ingrediant'
import { ingrediants } from '../../requests/plat'
import { ajouter as ajouterPlat } from '../../requests/plat';
import './ajouter.css'

function Modifier({plat}) {

    const [tags, setTags] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    const [nom, setNom] = useState('')
    const [type, setType] = useState('entree')
    const [prix, setPrix] = useState('')
    const [choix, setChoix] = useState('poulet')
    const [fixe, setFixe] = useState(false)
    const [estPrincipal, setEstPrincipal] = useState(false)

    useEffect(() => {
        async function fetchData() {
            let res = await list_ingrediants()
            setSuggestions(res.map(e => ({text: e.nomIngrediant, id: e.nomIngrediant, key: e.idIngrediant})))
            let res2 = await ingrediants(plat.idPlat);
            setTags(res2.map(e => ({text: e.nomIngrediant, id: e.nomIngrediant, key: e.idIngrediant})))
        }
        fetchData()
    })

    function handleDelete(i) {
        setTags(tags.filter((e, id) => id !== i))
    }

    function handleAddition(tag) {
        setTags([...tags, tag])
    }

    function handleDrag(tag, currPos, newPos) {
        const tagss = [...tags];
        const newTags = tagss.slice();
    
        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);
    
        // re-render
        setTags(newTags);
    }

    async function modifier() {
        let data = {
            nom, 
            prix: parseInt(prix), 
            fixe: fixe? 1 : 0,
            type, 
            ingrediants: tags.map(e => e.key),
            choix
        };
        ajouterPlat(data)
        .then(e => {
            console.log(e)
            alert('added!');
        })
        .catch(e => {
            console.log(e)
            alert('error!')
        })
    }

    return (
        <div className="addplat">
            <h3 id="titre">Modifier un plat</h3>
            <input type="text" placeholder="nom Plat" id="nom" onChange={e => setNom(e.target.value)} value={plat.nom} />
            <select placeholder="Type" id="droplist" onChange={e => {
                setEstPrincipal(e.target.value === "principal")
                setType(e.target.value)
            }} value={plat.type} >
                <option value="entree">entree</option>
                <option value="principal">principal</option>
                <option value="dessert">dessert</option>
            </select>
            <select 
                placeholder="Choix" 
                id="droplist2" 
                style={{display: estPrincipal?"inline-block":"none"}} 
                onChange={e => setChoix(e.target.value)}
                value={plat.choix} >
                <option value="poulet">poulet</option>
                <option value="viande">viande</option>
            </select>
            <input type="text" placeholder="Prix" id="prix" onChange={e => setPrix(e.target.value)} value={plat.prix} />
            <div>
                <label>fixe </label>
                <input type="checkbox" onChange={e => {setFixe(e.target.checked)}} checked={!!plat.fixe} />
            </div>
            <ReactTags
                tags={tags}
                suggestions={suggestions}
                delimiters={[188, 13]}
                handleDelete={handleDelete}
                handleAddition={handleAddition}
                handleDrag={handleDrag}
                placeholder="Ajouter ingrediant"
            />
            <Button label="Modifier" onClick={modifier} />
        </div>
    )
}

export default Modifier;