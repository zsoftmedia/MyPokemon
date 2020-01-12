import React from 'react'
import Image from '../power/Images/Images'
import Name from '../power/Title/Title'
import Moves from '../power/Moves/Moves'
import Abilities from '../power/Abilities/Abilities'
import Types from '../power/Types/Types'
import Order from '../power/Orders/Order'
import States from '../power/Stats/States'
import Weight from '../power/Weight/Weight'
import Height from '../power/Height/Height'
import './Style.css'
    const Card =({pokemon}) => {   
    return (
      <>             
             <div className ="col-md-4">
        <div className="card" >             
          <Image image ={pokemon.sprites.front_default} />
            <div className="card-body text-left">   
                <div className="card-title text-center">                      
                       <Name 
                        Name ={pokemon.name}
                        /> 
                        {pokemon.types.map((pokeTypes,index)=>
                        <Types 
                         key ={index}                         
                         types = {pokeTypes.type.name }/>
                       )}
               </div> 

                <div className="card-text text-center"> 

                        <div className="header">Abilities</div>
                        {pokemon.abilities.map((pokeAbilities,index)=>
                        <Abilities
                        key ={index}
                        ability = {pokeAbilities.ability.name}/>                      
                        )} 

                       <Order Order ={pokemon.order}/>

                     <ul className="list-group">
                            <div className="header">Stats</div>
                            {pokemon.stats.map((stat,index)=>
                            <States 
                                key ={index}
                                States={stat.stat.name }
                            />
                            )}
                      </ul>                           
                    <Weight 
                    pokeWeight ={pokemon.weight}
                    /> 
                    <ul className="list-group">
                            <button className="header" >
                            Moves
                            </button>
                            {pokemon.moves.map((pokemoves,index)=>
                            <Moves 
                            key ={index}
                            Moves = {pokemoves.move.name}
                            />
                            )}                       
                    </ul>                           
                    <Height 
                    pokeHeight= {pokemon.height}
                    />                                        
                </div>
                </div>
            </div>
        </div>          
</>
    );
}

export default Card;