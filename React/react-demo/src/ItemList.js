import { FaTrashAlt } from 'react-icons/fa';
import LineItem from './LineItem';

const ItemList = ({ items, onDelete, handleCheck }) => {
    return (
        <ul>
            {items.map((item => (
                <LineItem
                    key={item.id}
                    item={item}
                    onDelete={onDelete}
                    handleCheck={handleCheck}
                />
            )))}
        </ul>
    )
}

export default ItemList