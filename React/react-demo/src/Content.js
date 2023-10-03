

const Content = () => {
    const handleNameChange = () => {
        const names = ['Pesho', 'Gincho', 'Stancho'];
        const int = Math.floor(Math.random() * 3);
        return names[int];
      }

      const handleClick = () => {
        console.log('opo');
      };    

      const handleClick2 = (name) => {
        console.log(`${name} was clicked`);
      };

      const handleClick3 = (e) => {
        console.log(e.target);
      };    

    return (
        <main>
            <p onDoubleClick={handleClick}>
                Hello {handleNameChange()}!
            </p>
            <button onClick={handleClick}>Click it</button>
            <button onClick={() => handleClick2(handleNameChange())}>Click it 2</button>
            <button onClick={(e) => handleClick3(e)}>Click it 3</button>
        </main>
    )
}

export default Content