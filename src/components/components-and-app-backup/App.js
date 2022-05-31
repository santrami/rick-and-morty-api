import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Characters from './components/Characters'
import SearchCharacterForm from './components/SearchCharacter'

import './App.css'

function App() {
  
  const apiUrl="https://rickandmortyapi.com/api/character?page=1"
  
  const [characters, setCharacters] = useState([])
  const [selectedCharacters, setSelectedCharacters] = useState([])
  const [total, setTotal] = useState()
  //const [first, setfirst] = useState(second)

  const fetchApi=  async (apiUrl)=>{   
    const response= await fetch(apiUrl)
    const responseJson= await response.json()    
    //console.log(responseJson.info.next)
    if( responseJson.info.next != null ){
      setCharacters(characters =>[...characters,...responseJson.results])
      setSelectedCharacters(selectedCharacters =>[...selectedCharacters,...responseJson.results])
      setTotal(responseJson.info.count)
      //console.log(characters)
      fetchApi(responseJson.info.next)
    }
    //console.log(responseJson)
  }

  const filterCharacters = ( e ) => {
    const input = e.target.value
    console.log(input)
    const filteredCharacters = characters
        .filter(
          character => (
            character.name
              .toLowerCase()
              .includes(input.toLowerCase())
          )
        )
    setSelectedCharacters(filteredCharacters)
    // console.log(event.target.value)
  }

  useEffect(() => {        
    fetchApi(apiUrl)
    //console.log(characters)
  }, []) 

  return (
    <div className="App">
      <SearchCharacterForm filterCharacters={filterCharacters} />
      <Characters characters={selectedCharacters} total={total}/>     
    </div>
  );
}

export default App;
