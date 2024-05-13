import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import ThemeSwitcher from './components/ThemeSwitcher';
import Home from './pages/Home';
import Error from './pages/Error';

function App() {
  return (
    <div className="App">
      <ThemeSwitcher />
      <Router>
        <Routes>
          <Route index element={<Home />} />
          {/* <Route path="project" element={<Project />}>
            <Route path=":id" element={<Project />} />
          </Route> */}
          {/* <Route path="blog" element={<Blog />} /> */}
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
      <ScrollToTop />
    </div>
  );
}

export default App;
