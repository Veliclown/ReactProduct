import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const ThemeToggle = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <div>
            <h2>Тема: {theme}</h2>
            <button onClick={toggleTheme}>Змінити тему</button>
        </div>
    );
};

export default ThemeToggle;