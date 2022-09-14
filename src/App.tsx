import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Project from './pages/Project';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="project" element={<Project />}>
            <Route path=":id" element={<Project />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;