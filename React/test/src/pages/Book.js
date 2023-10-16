import { useOutletContext, useParams } from "react-router-dom"

const Book = () => {
  const { id } = useParams();
  return (
    <>
    <div>Book {id}</div>

    </>
  )
}

export default Book