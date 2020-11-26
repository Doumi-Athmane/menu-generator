import React, { useState, useEffect } from 'react'
import { WithContext as ReactTags } from 'react-tag-input'
import Button from '../button'
import { list_ingrediants } from '../../requests/ingrediant'
import { ajouter as ajouterPlat } from '../../requests/plat';
import './ajouter.css'

function Ajouter() {

    const [tags, setTags] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    const [nom, setNom] = useState('')
    const [type, setType] = useState('entree')
    const [prix, setPrix] = useState('')
    const [choixPrincipal, setChoixPrincipal] = useState('poulet')
    const [choixEntreel, setChoixEntree] = useState('NULL')
    const [fixe, setFixe] = useState(false)
    const [estPrincipal, setEstPrincipal] = useState(false)
    const [estEntree, setEstEntree] = useState(true)


    useEffect(() => {
        async function fetchData() {
            let res = await list_ingrediants()
            setSuggestions(res.map(e => ({text: e.nomIngrediant, id: e.nomIngrediant, key: e.idIngrediant})))
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

    async function ajouter() {
        let data = {
            nom, 
            prix: parseInt(prix), 
            fixe: fixe? 1 : 0,
            type, 
            ingrediants: tags.map(e => e.key),
            choix : type==='entree'? choixEntreel : choixPrincipal
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
            <h3 id="titre">Ajouter un plat</h3>
            <input type="text" placeholder="nom Plat" id="nom" onChange={e => setNom(e.target.value)}/>
            <select placeholder="Type" id="droplist" onChange={e => {
                setEstPrincipal(e.target.value === "principal")
                setEstEntree(e.target.value ==="entree")
                setType(e.target.value)
            }}>
                <option value="entree">entree</option>
                <option value="principal">principal</option>
                <option value="dessert">dessert</option>
            </select>
            {estPrincipal?
                (<select placeholder="Choix" id="droplist2" onChange={e => setChoixPrincipal(e.target.value)}>
                     
                    <option>Poulet</option>
                    <option>Viande</option>
                </select>):null
            }
            {estEntree?
                (<select placeholder="Choix" id="droplist2" onChange={e => setChoixEntree(e.target.value)}>
                    <option></option>
                    <option>soupe</option>
                    <option>salé</option>
                    <option>gratin</option>
                </select>):null
            }
            <input type="text" placeholder="Prix" id="prix" onChange={e => setPrix(e.target.value)} />
            <div>
                <label>fixe </label><input type="checkbox" onChange={e => {setFixe(e.target.checked)}}  />
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
            <Button label="Ajouter" onClick={ajouter} />
        </div>
    )
}

export default Ajouter;