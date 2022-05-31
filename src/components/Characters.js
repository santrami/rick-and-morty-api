import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Character from './Character'
import { DataContext } from '../context/DataContext';
import ButtonNavigation from './ButtonNavigation';


export default function Characters() {
      

    const {total, selectedCharacters, limit, offset,setOffset, setLimit} = useContext(DataContext)

    

    const char = selectedCharacters.slice(offset, limit)

    return (
        <div className='container '>

            
            <div className='row'>
                {char.map((character,index) => <Character character={character} key={index} />)}
            </div>
        </div>
    )
}