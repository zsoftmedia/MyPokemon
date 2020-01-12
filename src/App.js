import React,{useState,useEffect} from 'react';
import {getAllPokemon,getPokemon }from './services/Pokemon'
import Card from './component/Card/card'
import Header from './component/Header/Header'

import './App.css';
function App() {
  const [pokemonData,setPokemonData]= useState([]);
  const [nextUrl,setNestUrl] = useState('');
  const [preUrl,setPreUrl] = useState('');
  const [loading,setLoading] = useState(true);
  const mainUrl = "https://pokeapi.co/api/v2/pokemon"

  useEffect (() =>{
    async function fetchData(){
      let pokemonResponce = await getAllPokemon(mainUrl);
      setNestUrl(pokemonResponce.next);
      setPreUrl(pokemonResponce.previous);
     await loadingResult(pokemonResponce.results);
   
      setLoading(false);
    }
    fetchData();
   
  },[])
   const Next = async() =>{
    setLoading(true);
    let data = await getAllPokemon(nextUrl);
    await loadingResult(data.results);
    setNestUrl(data.next);
    setPreUrl(data.previous);
    setLoading(false)
   }
   const Prev = async() =>{
   if(!preUrl)return;
    setLoading(true);
    let data = await getAllPokemon(preUrl);
    await loadingResult(data.results);
    setNestUrl(data.next);
    setPreUrl(data.previous);
    setLoading(false)
   }
  const loadingResult =async (data) => {
    let pokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonRecord = await getPokemon(pokemon)
      return pokemonRecord
    }))
    console.log(pokemonData)
    setPokemonData(pokemonData);
  }

  return (
    <>
    
    <div>
    <div className ="mainHeader" >
      <div className ="row">
  
        <Header/>
        <div className = "col-6 btn">
             <button onClick ={Prev} type="button" className="btn btn-primary btn-sm">Back</button>
              <button onClick ={Next} type="button" className="btn btn-secondary btn-sm">Next</button>
             </div>
         </div>
         </div>
         
          {loading ? <h1 style={{ textAlign: 'center' }}>Loading...</h1> : (
        <>
          <div className="container-fluid ">
        <div className ="row">
         
            { pokemonData.map((pokemon, i) => {
              return <Card key={i} pokemon={pokemon}/>
            })
            }
        
         </div></div>
        </>
      )}
    </div>
  </>
);
}

export default App;