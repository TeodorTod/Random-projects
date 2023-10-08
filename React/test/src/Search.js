

const Search = ({ searchValue, setSearchValue }) => {
    return (
        <main className="search">
            <label htmlFor="search"></label>
            <input
                type="text"
                id="search"
                placeholder="Add color name"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                autoFocus
            />
        </main>
    )
}

export default Search