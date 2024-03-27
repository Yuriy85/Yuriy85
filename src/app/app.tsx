import { useEffect, useState } from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import Aside from '../layouts/Aside';
import Main from '../layouts/Main';
import React from 'react';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  useEffect(() => {
    if (isDarkTheme) {
      document.body.setAttribute('data-bs-theme', 'dark');
      localStorage.setItem('dark', 'true');
    } else {
      document.body.removeAttribute('data-bs-theme');
      localStorage.removeItem('dark');
    }
    return () => {
      document.body.removeAttribute('data-bs-theme');
    };
  }, [isDarkTheme]);

  return (
    <ErrorBoundary>
      <div className="cv container">
        <Aside isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
        <Main isDarkTheme={isDarkTheme} />
      </div>
    </ErrorBoundary>
  );
}

export default App;
