import { useState } from "react";
import { ThemeContext } from "./context/ThemeContext";
import PageContent from "./PageContent";

function App() {
    const [themeValue, setThemeValue] = useState('light');

    const toggleTheme = () => {
        setThemeValue((prev) => (prev === 'dark' ? 'light' : 'dark'));
    };

    return (
        <>
            <ThemeContext.Provider value={{ themeValue, toggleTheme }}>
                <button onClick={toggleTheme}>Toggle theme value {themeValue}</button>
                <PageContent />
            </ThemeContext.Provider>
        </>
    );
}


export default App;