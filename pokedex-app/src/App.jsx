import './App.css';
import { MainLayout } from './components/templates/MainLayout';

function App() {
  return (
    <MainLayout />
    // <div className='body-section'>
    //   <Navbar handlePage={handlePage} page={page}></Navbar>
    //   <>
    //     {page === 'game' && <Game />}
    //     {page === 'langs' && <section>Langs</section>}
    //     {page === 'home' && <Home />}
    //     {page === 'types' && <Types />}
    //     {page === 'generations' && <Generations />}
    //   </>
    // </div>
  )
}

export default App
