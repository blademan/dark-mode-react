import useLocalStorage from './useLocalStorage';
import { useEffect, useCallback } from 'react';

export default function useDarkMode() {
 const [darkMode, setDarkMode] = useLocalStorage('theme', 'light-mode');

 const darkThemeChange = useCallback(() => {
  return darkMode ? 'light-mode' : 'dark-mode';
 }, [darkMode]);

 useEffect(() => {
  if (window === undefined) return;
  document.documentElement.className = darkThemeChange();
 }, [darkMode, setDarkMode, darkThemeChange]);

 return [darkMode, setDarkMode];
}
