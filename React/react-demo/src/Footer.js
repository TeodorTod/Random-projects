

const Footer = ({length}) => {


  return (
    <footer>
        <p>Total list {length === 1 ? 'item' : 'items'} : {length}</p>
    </footer>
  )
}

export default Footer
