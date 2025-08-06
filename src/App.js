import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
     <Router>
     <Routes>

     <Route path="/" Component={Home} />
     <Route path="/projects" element={<Projects />} />
     <Route path="/contact" element={<Contact />} />
     </Routes>
     </Router>
    </div>
  );
}

export default App;
