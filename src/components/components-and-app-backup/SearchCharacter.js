import React from 'react'

export default function SearchCharacterForm({ filterCharacters }){
    
    return(
        <form>
            <label>Busca el personaje por nombre, planeta, estado:  </label>
            <input type="text" onChange={ filterCharacters }></input>
        </form>
    )
}