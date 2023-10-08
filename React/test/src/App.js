import { useState } from "react";
import Search from "./Search";
import Value from "./Value";


function App() {
    const [searchValue, setSearchValue] = useState('')

    return (
        <main className="main">
            <Value
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
            <Search
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
        </main>
    );
}

export default App;
