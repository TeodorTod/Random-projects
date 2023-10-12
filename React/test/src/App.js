import { useState, useEffect } from "react";
import Search from "./Search";
import Value from "./Value";

function App() {
    const [searchValue, setSearchValue] = useState([]);
    const [data, setData] = useState([]);
    const [isButtonClicked, setIsButtonClicked] = useState(false);

    useEffect(() => {
        if (isButtonClicked) {
            addUsers();
        }
    }, [isButtonClicked]);

    const addUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/');
        const resData = await response.json();
        setData(resData);
    }

    const handleButtonClick = () => {
        setIsButtonClicked(!isButtonClicked);
    }

    return (
        <>
            <button onClick={handleButtonClick}>Users</button>
            <button>Posts</button>
            <button>Comments</button>
            {isButtonClicked && (
                <ul>
                    {data.map(user => (
                        <li key={user.id}>{JSON.stringify(user)}</li>
                    ))}
                </ul>
            )}
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
        </>
    );
}

export default App;
