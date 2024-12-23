import React from 'react'
import FetchData from './Components/FetchData'
import FetchYogaData from './Components/FetchYogaData'

function App() {
  return (
 <>
 <h1>YOGA INFO</h1>
 <FetchYogaData/>
 <br/>
 <h1>FOOD INFO</h1>
 <FetchData/>
 </>
  )
}

export default App