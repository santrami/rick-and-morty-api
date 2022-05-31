import React, {useContext} from 'react'
import { DataContext } from '../context/DataContext'

export default function ButtonNavigation() {

    const {showPrevCharacters, showNextCharacters} = useContext(DataContext)
  return (
    <div>
        <ul className='content d-flex justify-content-center'>
                <button className='btn btn-primary m-3' onClick={showPrevCharacters}>prev 12</button>
                <button className='btn btn-primary m-3' onClick={showNextCharacters}>next 12</button>               
            </ul>
    </div>
  )
}
