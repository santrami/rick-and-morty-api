import React, { createContext, useState, useEffect } from 'react'

export const DataContext = createContext()

export const DataProvider = ({ children }) => {
    const apiUrl="https://rickandmortyapi.com/api/character?page=1"
  
  const [characters, setCharacters] = useState([])
  const [selectedCharacters, setSelectedCharacters] = useState([])

  const [total, setTotal] = useState()
  const [limit, setLimit] = useState(12)
  const [offset, setOffset] = useState(0)     

  function showNextCharacters(){ 
    console.log(total)      
    if(limit<selectedCharacters.length){
        setOffset(limit)
        setLimit(limit+12)        
    }        
}

function showPrevCharacters(){
    if(offset>0){            
        setOffset(offset-12)
        setLimit(offset)
    }            
}

  useEffect(() => {       
    const fetchApi=  async (apiUrl)=>{   
      const response= await fetch(apiUrl)
      const responseJson= await response.json()    
      //console.log(responseJson.info.next)
      if( responseJson.info.next != null ){
        setCharacters(characters =>[...characters,...responseJson.results])
        setSelectedCharacters(selectedCharacters =>[...selectedCharacters,...responseJson.results])
        setTotal(responseJson.info.count)                
        fetchApi(responseJson.info.next)
      }
      //console.log(responseJson)
    }  

    fetchApi(apiUrl)   
  }, []) 

    const filterCharacters = ( e ) => {
        const input = e.target.value
        console.log(input)
        const filteredCharacters = characters
            .filter(
              character => (
                character.name
                  .toLowerCase()
                  .includes(input.toLowerCase()) || character.origin.name
                  .toLowerCase()
                  .includes(input.toLowerCase())|| character.status
                  .toLowerCase()
                  .includes(input.toLowerCase())|| character.gender
                  .toLowerCase()
                  .includes(input.toLowerCase())|| character.species
                  .toLowerCase()
                  .includes(input.toLowerCase())                
              )
            )
        setSelectedCharacters(filteredCharacters)
        setLimit(12)
        setOffset(0)
        // console.log(event.target.value)
      }

    return (
        <DataContext.Provider value={{                        
            selectedCharacters, 
            setSelectedCharacters,            
            total, 
            setTotal, 
            limit,
            offset,
            setLimit,
            setOffset,
            filterCharacters,
            showPrevCharacters, 
            showNextCharacters
        }}>
            {children}
        </DataContext.Provider>
    )
}
