import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FaMoon, FaSun } from 'react-icons/fa';
import ScrollToTop from './components/ScrollToTop';
import ThemeSwitcher from './components/ThemeSwitcher';

import Project from './pages/Project';
import Home from './pages/Home';
import Blog from './pages/Blog';

function App() {
  let theme = true;

  const onClick = () => {
    theme = !theme;

    if (theme) {
      document.documentElement.style.setProperty(
        '--mainTextColor',
        'var(--mainTextColor-light)'
      );
      document.documentElement.style.setProperty(
        '--secondaryTextColor',
        'var(--secondaryTextColor-light)'
      );
      document.documentElement.style.setProperty(
        '--mainLinkColor',
        'var(--mainLinkColor-light)'
      );
      document.documentElement.style.setProperty(
        '--mainBorderColor',
        'var(--mainBorderColor-light)'
      );
      document.documentElement.style.setProperty(
        '--mainBgColor',
        'var(--mainBgColor-light)'
      );
    } else {
      document.documentElement.style.setProperty(
        '--mainTextColor',
        'var(--mainTextColor-dark)'
      );
      document.documentElement.style.setProperty(
        '--secondaryTextColor',
        'var(--secondaryTextColor-dark)'
      );
      document.documentElement.style.setProperty(
        '--mainLinkColor',
        'var(--mainLinkColor-dark)'
      );
      document.documentElement.style.setProperty(
        '--mainBorderColor',
        'var(--mainBorderColor-dark)'
      );
      document.documentElement.style.setProperty(
        '--mainBgColor',
        'var(--mainBgColor-dark)'
      );
    }
  };
  return (
    <div className="App">
      <div id="wrapper--techstack__items">
        <div className="card--techstack" onClick={onClick}>
          <span>Theme Switcher</span>
        </div>
      </div>
      {/* <button onClick={onClick}>
        <FaMoon className={active} />Theme
      </button> */}
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
      <ThemeSwitcher />
    </div>
  );
}

export default App;
