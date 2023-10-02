import { MouseEvent } from "react";

function ListGroup() {
  let items = [
    "Burgas",
    "Varna",
    "Shumen",
    "Veliko Tarnovo",
    "Plovdiv",
    "Smolyan",
  ];

  const handleClick = (event: MouseEvent) => console.log(event);
 

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No items left</p>}
      <ul className="list-group">
        {items.map((item, i) => (
          <li
            className="list-group-item"
            key={i}
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
