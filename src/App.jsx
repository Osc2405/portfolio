import React from 'react'
import NavBar from './components/Navbar'

const App = () => {
  return (
    <div className='container'>
        <NavBar/>
        <div>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Button
        </button>
        </div>
    </div>
  )
}

export default App
