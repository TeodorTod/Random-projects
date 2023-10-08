

const Value = ({ searchValue, setSearchValue }) => {
    let backgroundColor = "white";

    if (isValidColor(searchValue)) {
        backgroundColor = searchValue;
    }


    function isValidColor(colorString) {
        const s = new Option().style;
        s.color = colorString;
        return s.color !== "";
    }
    return (
        <main
            className="value"
            style={{ backgroundColor: backgroundColor }}>
            {searchValue}
        </main>
    )
}

export default Value