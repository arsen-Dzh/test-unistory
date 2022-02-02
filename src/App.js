import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Cards } from './pages/Cards/Cards';
import { EditCard } from './pages/EditCard/EditCard';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate replace to="/cards"/>}/>
      <Route path="/cards" element={<Cards />} />
      <Route path="cards/:id/edit" element={<EditCard />}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
