import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSElectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items left</p>}
      <ul className="list-group">
        {items.map((item, i) => (
          <li
            className={
              selectedIndex === i ? "list-group-item active" : "list-group-item"
            }
            key={i}
            onClick={() => {
              setSElectedIndex(i);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
