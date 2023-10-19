import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

const PageContent = () => {
    const { themeValue, toggleTheme } = useContext(ThemeContext);

    return (
        <>
            <div>Current Theme: {themeValue}</div>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </>
    );
}

export default PageContent;
