import React, { createContext, useState, useEffect } from 'react';

// Contexto que gobierna el “modo caballero”: oscuro o claro
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Estado del modo: oscuro (caballero) o claro (día)
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    // Si hay preferencia guardada, úsala; si no, detecta la del sistema
    return savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    // Aplica la “armadura” de color al documento
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    document.body.classList.toggle('dark-mode', isDarkMode);
    // Guarda la elección del caballero para futuras visitas
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  // Cambio de guardia: alterna entre modo caballero y modo día
  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
