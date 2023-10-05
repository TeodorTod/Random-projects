import { FaPlus } from "react-icons/fa";

const AddItems = () => {
    return (
        <form className="addForm">
            <label htmlFor="addItem">Add Item</label>
            <input
                autoFocus
                id="addItem"
                type="text"
                placeholder="Add new item"
                required
            />
            <button type="submit" aria-label="Add Item">
                <FaPlus />
            </button>
        </form>
    );
};

export default AddItems;
