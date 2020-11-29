import React, { useState, useEffect } from 'react'
import { WithContext as ReactTags } from 'react-tag-input'
import Button from '../button'
import { list_ingrediants } from '../../requests/ingrediant'
import { ajouter as ajouterPlat } from '../../requests/plat';
import axios from 'axios'
import './ajouter.css'

function Ajouter({refresh}) {

    const [tags, setTags] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    const [nom, setNom] = useState('')
    const [errorNom, setErrorNom] = useState(false)
    const [type, setType] = useState('entree')
    const [prix, setPrix] = useState('')
    const [errorPrix, setErrorPrix] = useState(false)
    const [choixPrincipal, setChoixPrincipal] = useState('poulet')
    const [choixEntree, setChoixEntree] = useState('null')
    const [errorChoix, setErrorChoix] = useState(false)
    const [fixe, setFixe] = useState(false)
    const [estPrincipal, setEstPrincipal] = useState(false)
    const [estEntree, setEstEntree] = useState(true)


    useEffect(() => {
        const cancelToken = axios.CancelToken;
        const source = cancelToken.source();
        async function fetchData() {
            let res = await list_ingrediants(source)
            setSuggestions(res.map(e => ({text: e.nomIngrediant, id: e.nomIngrediant, key: e.idIngrediant})))
        }
        fetchData()
        .catch(err => {})
        return () => source.cancel("axios task cancelled")
    }, [])

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
            nom, 
            prix: parseInt(prix), 
            fixe: fixe? 1 : 0,
            type, 
            ingrediants: tags.map(e => e.key),
            choix : type==='entree'? choixEntree : choixPrincipal
        };
        ajouterPlat(data)
        .then(e => {
            //console.log(e)
            refresh()
            alert('plat ajouté!');
        })
        .catch(e => {
            console.log(e)
            alert('erreur: '+e)
        })
    }

    return (
        <div className="addplat">
            <h3 id="titre">Ajouter un plat</h3>
            <input type="text" placeholder="nom Plat" id="nom" onChange={e => setNom(e.target.value)}/>
            {errorNom?(<label className="error">ce nom n'est pas valide.</label>):null}
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
                     
                    <option value="poulet">Poulet</option>
                    <option value="viande">Viande</option>
                </select>):null
            }
            {estEntree?
                (<><select placeholder="Choix" id="droplist2" value={choixEntree} onChange={e => {
                    if (fixe)
                        setChoixEntree("null")
                    else
                        setChoixEntree(e.target.value)
                }}>
                    <option>null</option>
                    <option>soupe</option>
                    <option>salé</option>
                    <option>gratin</option>
                </select>
                {errorChoix?(<label className="error">fixe est exigée si le type est null</label>):null}
                </>):null
            }
            <input type="text" placeholder="Prix" id="prix" onChange={e => setPrix(e.target.value)} />
            {errorPrix?(<label className="error">le prix doit etre un nombre</label>):null}
            <div>
                <label>fixe </label><input type="checkbox" onChange={e => {
                    if(e.target.checked)
                        setChoixEntree("null");
                    setFixe(e.target.checked)
                }}  />
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