import { useOutletContext, useParams } from "react-router-dom"

const Book = () => {
  const { id } = useParams();
  const obj = useOutletContext();
  return (
    <>
    <div>Book {id}</div>
    <h2>{obj.hello}</h2>
    </>
  )
}

export default Book