import React from 'react'

import Characters from './components/Characters'
import SearchCharacterForm from './components/SearchCharacter'
import ButtonNavigation from './components/ButtonNavigation'

import './App.css'
import { DataProvider } from './context/DataContext'

function App() {
  return (
    <div className="App">
      <DataProvider>
        <SearchCharacterForm/>   
        <ButtonNavigation />     
        <Characters/>     
        <ButtonNavigation />
      </DataProvider>
    </div>
  );
}

export default App;