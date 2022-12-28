import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import IconMoon from "./icons/IconMoon";
import IconSun from "./icons/IconSun";

const initialStateDarkMode = localStorage.getItem('theme') === 'dark'

const Header = () => {
    const [darkMode, setDarkMode] = useState(initialStateDarkMode)
    useEffect(() => {
        if(darkMode) {
            document.documentElement.classList.add("dark")
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove("dark")
            localStorage.setItem('theme', 'light')
        }
    }, [darkMode])
    return (
        <header className="container mx-auto px-4 pt-8">
            <div className="flex justify-between">
                <h1 className="text-3xl font-semibold uppercase tracking-[0.3em] text-white">
                    todo
                </h1>
                <button onClick={()=> setDarkMode(!darkMode)}>
                    {
                        darkMode ? <IconMoon/> : <IconSun />
                    }
                </button>
            </div>
        </header>
    );
};

export default Header;
