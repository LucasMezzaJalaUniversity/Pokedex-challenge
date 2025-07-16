import { BrowserRouter, Routes, Route } from "react-router";
import { createRoot } from 'react-dom/client';
import { Game } from './components/templates/Game';
import { Home } from './components/templates/Home';
import { Types } from './components/templates/Types';
import { Generations } from './components/templates/Generations';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="game" element={<Game />} />
        <Route path="langs" element={<section>Langs</section>} />
        <Route path="types" element={<Types />} />
        <Route path="generations" element={<Generations />} />  
      </Route>
    </Routes>
  </BrowserRouter>
)
