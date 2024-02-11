
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';


function App() {

  const [currentTheme, setCurrentTheme] = useState('light'); // Initial theme state

  const toggleTheme = () => {
      setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={theme[currentTheme]}> {/* Pass the theme object */}
    <Router>
      <div>
        <Navbar toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
        </Routes>
      </div>
    </Router>
    </ThemeProvider>
  );
}

export default App;
