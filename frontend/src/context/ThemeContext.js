import React, { createContext, useState, useEffect, useCallback } from 'react';

/**
 * Contexto de mando para el control de la interfaz.
 * Define la estética y el carácter visual de la aplicación.
 */
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Inicialización: Recuperamos la configuración previa o respetamos el sistema
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme === 'dark';
    
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Ejecución del cambio de estado visual
  useEffect(() => {
    const theme = isDarkMode ? 'dark' : 'light';
    
    // Marcamos el territorio en el DOM
    document.documentElement.setAttribute('data-theme', theme);
    document.body.style.colorScheme = theme; // Control nativo del navegador
    
    // Persistencia en el almacenamiento local
    localStorage.setItem('theme', theme);
  }, [isDarkMode]);

  // Comando para alternar la visión
  const toggleTheme = useCallback(() => {
    setIsDarkMode(prev => !prev);
  }, []);

  const value = {
    isDarkMode,
    toggleTheme
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};