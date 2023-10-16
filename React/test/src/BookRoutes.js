import { Routes, Route } from "react-router-dom"
import BookList from "./pages/BookList";
import Book from "./pages/Book";
import NewBook from "./pages/NewBook";
import BookLayout from "./BookLayout";

const BookRoutes = () => {
    return (
        <>
            <BookLayout />
            <Routes>
                <Route index element={<BookList />} />
                <Route path=":id" element={<Book />} />
                <Route path='new' element={<NewBook />} />
            </Routes>
        </>
    )
}

export default BookRoutes