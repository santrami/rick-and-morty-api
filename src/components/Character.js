import React from 'react'

export default function Character({ character, index }) {
    return ( 
        <div className='col d-flex justify-content-center'>
            <div className='card p-5' style={{ width: "auto" }}>
                <img src={character.image} alt={character.name} />                                   
                <h2> {character.name} </h2>                    
                <h4>{character.status}</h4>                    
                <h5>{character.origin.name}</h5>
                <h5>{character.gender}</h5>
                <h5>{character.species}</h5>
            </div>
        </div>
    )
}