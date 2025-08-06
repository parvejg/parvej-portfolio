import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Projects from './Projects';

function App() {
  return (
    <div className="App">
     <Router>
     <Routes>

     <Route path="/" Component={Home} />
     <Route path="/projects" element={<Projects />} />
     </Routes>
     </Router>
    </div>
  );
}

export default App;
