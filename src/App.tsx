import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { GlobalContext } from './GlobalContext'
import Home from './pages/Home'
import Test from './pages/Test'

function App() {
  const [globalContent,setGlobalContent]=useState({
    username:"matano",
    path:"/index"
  })

  return (
    <>
    <GlobalContext.Provider value={globalContent}>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/test' element={<Test/>}/>
        </Routes>
      </Router>
    </GlobalContext.Provider>
    </>
  )
}

export default App
