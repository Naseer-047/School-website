import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button 
            onClick={toggleTheme}
            className="p-2 rounded-full border border-white/10 glass hover:bg-white/10 transition-colors"
            aria-label="Toggle Theme"
        >
            {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            ) : (
                <Moon className="w-5 h-5 text-indigo-500 fill-indigo-500" />
            )}
        </button>
    );
};

export default ThemeToggle;
