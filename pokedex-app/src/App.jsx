import { useState } from 'react'
import './App.css'
import { Navbar } from './components/organisms/Navbar'
import { Home } from './components/templates/Home'
import { Types } from './components/templates/Types'
import { Generations } from './components/templates/Generations'

function App() {
  const [page, setPage] = useState('home')
  const handlePage = (currentPage) => {
    setPage(currentPage)
  }

  return (
    <div className='body-section'>
      <Navbar handlePage={handlePage} page={page}></Navbar>
      <>
        {page === 'home' && <Home />}
        {page === 'types' && <Types />}
        {page === 'generations' && <Generations />}
      </>
    </div>
  )
}

export default App
