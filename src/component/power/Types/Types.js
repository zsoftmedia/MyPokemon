import React from 'react'
import typeColors from './pokemontype'

const Types =(props) => {
    
    return (
     <div className="types" style={{ backgroundColor: typeColors[props.types] }}>{props.types} </div>   
    )}

export default Types;