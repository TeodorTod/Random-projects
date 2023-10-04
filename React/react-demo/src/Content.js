import { useState } from "react";

import ItemList from "./ItemList";

const Content = ({ items, onDelete, handleCheck }) => {

    return (
        <main>
            {items.length ? (
                <ItemList
                    items={items}
                    onDelete={onDelete}
                    handleCheck={handleCheck}
                />
            ) : (
                <p style={{ marginTop: '2rem' }}>Your list is empty.</p>
            )}
        </main>
    )

};

export default Content;
