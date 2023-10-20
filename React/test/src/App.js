import { useState } from "react";
import Demo from "./components/Demo";
import { Context } from "./context"
import Outside from "./components/Outside";


function App() {
    const [value, setValue] = useState(1) 
    const changeValue = () => {
        setValue(value + 1)
    }

    return (
        <>
        <Context.Provider value={value}>
            <Demo />
            <button onClick={changeValue}>Change</button>
        </Context.Provider>
        <Outside />
    </>
    );
}


export default App;