import { BrowserRouter, Routes, Route } from "react-router";
import { createRoot } from 'react-dom/client';
import { Game } from './components/pages/Game';
import { Home } from './components/pages/Home';
import { Types } from './components/pages/Types';
import { Generations } from './components/pages/Generations';
import './index.css'
import App from './App.jsx'
import { Langs } from "./components/pages/Langs.jsx";
import { PokemonDetail } from "./components/pages/PokemonDetail.jsx";
import { PokemonProvider } from './contexts/PokemonProvider.jsx';  

createRoot(document.getElementById('root')).render(
  <PokemonProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon/:id" element={<PokemonDetail />} />
          <Route path="game" element={<Game />} />
          <Route path="langs" element={<Langs />} />
          <Route path="types" element={<Types />} />
          <Route path="generations" element={<Generations />} />  
        </Route>
      </Routes>
    </BrowserRouter>
  </PokemonProvider>
)
