import { useState } from "react";

import ItemList from "./ItemList";

const Content = ({ items, onDelete, handleCheck }) => {

    return (
        <>
            {items.length ? (
                <ItemList
                    items={items}
                    onDelete={onDelete}
                    handleCheck={handleCheck}
                />
            ) : (
                <p style={{ marginTop: '2rem' }}>Your list is empty.</p>
            )}
        </>
    )

};

export default Content;
