import Header from './components/Header';
import MainContent from './components/MainContent';
import { useState } from 'react';
import './App.css';


function App() {

  const [showAddForm, setShowAddForm] = useState(false);
  const [movies, setMovies] = useState([])

  const handleForm = () => {
    setShowAddForm(!showAddForm);
    console.log(showAddForm);
  }

  return (
    <div className="App">
      <Header handleForm={handleForm} />
      <MainContent showForm={showAddForm} />
    </div>
  );
}

export default App;
