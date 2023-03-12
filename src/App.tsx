import './App.css';
import Home from "./pages/home/home";
import { useState, useEffect } from 'react';
import { getAll } from './BooksAPI';

const App = () => {
  
  const [shelves, setShelves] = useState([]);

  useEffect(() => {
    getAll().then((items) => setShelves(items));
  });
  
  return (
    <Home shelves={shelves} />
  );
}

export default App;
