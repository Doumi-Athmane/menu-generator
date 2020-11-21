import React, { useState } from 'react'
import { WithContext as ReactTags } from 'react-tag-input'
import Button from '../button'
import './ajouter.css'

const suggest = [
    {id: "sel", text: "sel"},
    {id: "buerre", text: "buerre"},
    {id: "huile", text: "huile"},
    {id: "amande affile", text: "amande affile"},
    {id: "test", text: "test"},
    {id: "test2", text: "test2"},
    {id: "test3", text: "test3"},
    {id: "test4", text: "test4"},
]

function Ajouter() {

    const [tags, setTags] = useState([]);
    const [suggestions] = useState(suggest);

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

    return (
        <div className="addplat">
            <h3 id="titre">Ajouter un plat</h3>
            <input type="text" placeholder="nom Plat" id="nom" />
            <select placeholder="Type" id="droplist">
                <option>Entree</option>
                <option>Principal</option>
                <option>Dessert</option>
            </select>
            <input type="text" placeholder="Prix" id="prix" />
            <ReactTags
                tags={tags}
                suggestions={suggestions}
                delimiters={[188, 13]}
                handleDelete={handleDelete}
                handleAddition={handleAddition}
                handleDrag={handleDrag}
                placeholder="Ajouter ingrediant"
            />
            <Button label="Ajouter" />
        </div>
    )
}

export default Ajouter;