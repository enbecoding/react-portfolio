import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/pageComponents/Home';
import About from './components/pageComponents/About';
import Projects from './components/pageComponents/Projects';
import Contact from './components/pageComponents/Contact';


function App() {
  return (
    <div className="App">
      <Header/>
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
