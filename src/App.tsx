import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import ThemeSwitcher from './components/ThemeSwitcher';
import { ThemeProvider } from './context/ThemeContext';

import Project from './pages/Project';
import Home from './pages/Home';
import Blog from './pages/Blog';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <ThemeSwitcher />
        <Router>
          <Routes>
            <Route index element={<Home />} />
            <Route path="project" element={<Project />}>
              <Route path=":id" element={<Project />} />
            </Route>
            <Route path="blog" element={<Blog />} />
          </Routes>
        </Router>
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;
