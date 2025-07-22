import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import { lazy, Suspense } from 'react';
import './index.css';
import App from './App.jsx';
import { PokemonProvider } from './contexts/PokemonProvider.jsx';
import { Loading } from "./components/molecules/Loading.jsx";

const Home = lazy(() => import('./components/pages/Home'));
const Game = lazy(() => import('./components/pages/Game'));
const Types = lazy(() => import('./components/pages/Types'));
const Generations = lazy(() => import('./components/pages/Generations'));
const Langs = lazy(() => import('./components/pages/Langs'));
const PokemonDetail = lazy(() => import('./components/pages/PokemonDetail'));

createRoot(document.getElementById('root')).render(
  <PokemonProvider>
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
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
      </Suspense>
    </BrowserRouter>
  </PokemonProvider>
);
