import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Character from './Character'

export default function Characters({ characters, total }) {
    const [limit, setLimit] = useState(12)
    const [offset, setOffset] = useState(0)    

    function showNextCharacters(){ 
        console.log(total)      
        if(limit<total){
            setOffset(limit)
            setLimit(limit+12)
            console.log(limit,offset)
        }        
    }

    function showPrevCharacters(){
        if(offset>0){            
            setOffset(offset-12)
            setLimit(offset)
        }        
    }

    const char = characters.slice(offset, limit)

    return (
        <div className='container'>

            <ul>
                <button onClick={showPrevCharacters}>prev 12</button>
                <button onClick={showNextCharacters}>next 12</button>               
            </ul>
            <div className='row'>
                {char.map(character => <Character character={character} />)}
            </div>
        </div>
    )
}
