import React, {useContext} from 'react'
import { DataContext } from '../context/DataContext'


export default function SearchCharacterForm(){
    const {filterCharacters} = useContext(DataContext)
    return(
        <form className='container d-flex justify-content-center' style={{background:"transparent"}}>
            <div className='input-group bg-dark p-3'>
                <label style={{color:"white"}}>Busca el personaje por nombre, planeta, estado o género: </label>            
                <input className='form-control' type="text" onChange={ filterCharacters }></input>                
            </div>
        </form>
    )
}