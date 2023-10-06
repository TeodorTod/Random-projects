import { FaTrashAlt } from "react-icons/fa";

const LineItem = ({ onDelete, handleCheck, item }) => {
    return (
        <li className="item"    >
            <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleCheck(item.id)}
            />
            <label
                style={item.checked ? { textDecoration: "line-through" } : null}
                onDoubleClick={() => handleCheck(item.id)}
            >
                {item.item}
            </label>
            <FaTrashAlt role="button"
                tabIndex="0" aria-label={`Delete ${item.item}`} onClick={() => onDelete(item.id)} />
        </li>
    );
};

export default LineItem;
