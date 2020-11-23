import React, { useState, useEffect } from 'react'
import { WithContext as ReactTags } from 'react-tag-input'
import Button from '../button'
import { list_ingrediants } from '../../requests/ingrediant'
import './ajouter.css'

function Ajouter() {

    const [tags, setTags] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    const [nom, setNom] = useState('')
    const [type, setType] = useState('')
    const [prix, setPrix] = useState('')

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

    function ajouter() {
        let t = tags.map(e => e.text)
        console.log(tags)
    }

    return (
        <div className="addplat">
            <h3 id="titre">Ajouter un plat</h3>
            <input type="text" placeholder="nom Plat" id="nom" onChange={e => setNom(e.target.value)}/>
            <select placeholder="Type" id="droplist" onChange={e => setType(e.target.value)}>
                <option>Entree</option>
                <option>Principal</option>
                <option>Dessert</option>
            </select>
            <input type="text" placeholder="Prix" id="prix" onChange={e => setPrix(e.target.value)} />
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