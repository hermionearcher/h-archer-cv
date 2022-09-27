import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Project from './pages/Project';
import Home from './pages/Home';
import Blog from './pages/Blog';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="project" element={<Project />}>
            <Route path=":id" element={<Project />} />
          </Route>
          <Route path="blog" element={<Blog />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;