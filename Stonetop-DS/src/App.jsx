import React from 'react'
import Homepage from './components/Homepage'
import Process from './components/Process'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/process" element={<Process/>} />
      </Routes>
    </div>
  )
}

export default App
