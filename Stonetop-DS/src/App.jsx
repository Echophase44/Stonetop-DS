import React from 'react'
import Homepage from './components/Homepage'
import Process from './components/Process'
import PrivacyPolicy from './components/PrivacyPolicy'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div>
      <Routes>
        <Route index element={<Homepage/>} />
        <Route path="/process" element={<Process/>} />
        <Route path="/privacypolicy" element={<PrivacyPolicy/>}></Route>
      </Routes>
    </div>
  )
}

export default App
