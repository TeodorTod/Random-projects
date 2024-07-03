import './edit-service.scss'
import { useLocation } from 'react-router-dom';

const EditService = () => {
    const location = useLocation();
    const selected = location.state?.selected;
  
    console.log(selected); 
  return (
    <div>EditService</div>
  )
}

export default EditService