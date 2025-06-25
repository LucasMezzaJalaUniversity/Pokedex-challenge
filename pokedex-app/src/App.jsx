import { useState } from 'react'
import './App.css'
import { Navbar } from './components/organisms/Navbar'
import { Home } from './components/pages/Home'
import { Types } from './components/pages/Types'
import { Generations } from './components/pages/Generations'

function App() {
  const [page, setPage] = useState('home')
  const handlePage = (currentPage) => {
    setPage(currentPage)
  }

  return (
    <section className='body-section'>
      <nav>
        <Navbar handlePage={handlePage} page={page}></Navbar>
      </nav>
      {page === 'home' && <Home />}
      {page === 'types' && <Types />}
      {page === 'generations' && <Generations />}
    </section>
  )
}

export default App
