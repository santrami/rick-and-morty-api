import React from 'react'

export default function Character({ character }) {
    return (
        <div className='col'>
            <div className='card py-4 px-3 m-1' style={{ backgroundColor: "grey", width: "350px" }}>
                <img src={character.image} alt={character.name} />
                <h4> {character.name} </h4>
                {character.status}
                {character.id}
            </div>
        </div>
    )
}
