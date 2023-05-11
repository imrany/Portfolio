import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { GlobalContext } from './GlobalContext'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

function App() {
  const globalContent={
    name:"Developer",
    path:"/"
  }

  return (
    <div className='bg-gray-100'>
    <GlobalContext.Provider value={globalContent}>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Router>
    </GlobalContext.Provider>
    </div>
  )
}

export default App
