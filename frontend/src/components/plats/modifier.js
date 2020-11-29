import React, { useState, useEffect } from 'react'
import { WithContext as ReactTags } from 'react-tag-input'
import Button from '../button'
import { list_ingrediants } from '../../requests/ingrediant'
import { ingrediants } from '../../requests/plat'
import { modifier as modifierPlat } from '../../requests/plat';
import axios from 'axios'
import './ajouter.css'

function Modifier({plat, refresh}) {

    const [tags, setTags] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    const [nom, setNom] = useState(plat.nom)
    const [errorNom, setErrorNom] = useState(false)
    const [type, setType] = useState(plat.type)
    const [prix, setPrix] = useState(plat.prix.toString())
    const [errorPrix, setErrorPrix] = useState(false)
    const [choixPrincipal, setChoixPrincipal] = useState(plat.type==="principal"?plat.choix:"poulet")
    const [choixEntree, setChoixEntree] = useState(plat.type==="entree"?plat.choix+"":"null")
    const [errorChoix, setErrorChoix] = useState(false)
    const [fixe, setFixe] = useState(!!plat.fixe)
    const [estPrincipal, setEstPrincipal] = useState(plat.type === "principal")
    const [estEntree, setEstEntree] = useState(plat.type === "entree")

    useEffect(() => {
        const cancelToken = axios.CancelToken;
        const source = cancelToken.source();
        async function fetchData() {
            let res = await list_ingrediants()
            setSuggestions(res.map(e => ({text: e.nomIngrediant, id: e.nomIngrediant, key: e.idIngrediant})))
            let res2 = await ingrediants(plat.idPlat, source);
            setTags(res2.map(e => ({text: e.nomIngrediant, id: e.nomIngrediant, key: e.idIngrediant.toString()})))
        }
        fetchData()
        .catch(err => {})
        return () => source.cancel("axios task cancelled!");
    }, [plat.idPlat])

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
        setErrorNom(false)
        setErrorPrix(false)
        setErrorChoix(false)
        let proceed = true;
        if (nom === "") {
            setErrorNom(true)
            proceed = false;
        }
        if (prix === "" || !prix.match(/^[0-9]+$/i)) {
            setErrorPrix(true)
            proceed = false;
        }
        if(type === "entree" && choixEntree+"" === "null" && !fixe) {
            setErrorChoix(true)
            proceed = false;
        }
        if (!proceed)
            return;
        let data = {
            id: plat.idPlat,
            nom, 
            prix: parseInt(prix), 
            fixe: fixe? 1 : 0,
            type, 
            choix: type === "entree"?choixEntree:choixPrincipal,
            ingrediants: tags.map(e => e.key),
        };
        console.log(data)
        modifierPlat(data)
        .then(e => {
            refresh()
            alert('plat modifié!');
        })
        .catch(e => {
            
            alert('erreur: '+e)
        })
    }

    return (
        <div className="addplat">
            <h3 id="titre">Modifier un plat</h3>
            <input type="text" placeholder="nom Plat" id="nom" onChange={e => setNom(e.target.value)} value={nom} />
            {errorNom?(<label className="error">ce nom n'est pas valide.</label>):null}
            <select placeholder="Type" id="droplist" onChange={e => {
                setEstPrincipal(e.target.value === "principal")
                setEstEntree(e.target.value === "entree")
                setType(e.target.value)
            }} value={type} >
                <option value="entree">entree</option>
                <option value="principal">principal</option>
                <option value="dessert">dessert</option>
            </select>
            {estPrincipal? 
               (<select 
                placeholder="Choix" 
                id="droplist2" 
                onChange={e => setChoixPrincipal(e.target.value)}
                value={choixPrincipal} >
                <option value="poulet">poulet</option>
                <option value="viande">viande</option>

                </select>) : null
            
             }

            {estEntree? 
                (<><select 
                placeholder="Choix" 
                id="droplist2" 
                onChange={e => {
                    if(fixe)
                        setChoixEntree('null');
                    else
                        setChoixEntree(e.target.value);
                }}
                value={choixEntree} >
                            <option value="null">Null</option>
                            <option value="soupe">Soupe</option>
                            <option value="salé">Salé</option>
                            <option value="gratin">Gratin</option>

                </select>
                {errorChoix?(<label className="error">fixe est exigée si le type est null</label>):null}
                </>) : null 
            }
            <input type="text" placeholder="Prix" id="prix" onChange={e => setPrix(e.target.value)} value={prix} />
            {errorPrix?(<label className="error">le prix doit etre un nombre</label>):null}
            <div>
                <label>fixe </label>
                <input type="checkbox" onChange={e => {
                    if(e.target.checked)
                        setChoixEntree('null');
                    setFixe(e.target.checked)
                }} checked={fixe} />
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