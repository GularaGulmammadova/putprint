import styles from './NavBar.module.css';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();

  const goToPreviousPage = () => {
    navigate(-1);
  };

  return (
    <div className={styles.flex}>    
      <button style={{cursor:"pointer"}} onClick={goToPreviousPage} className={styles.link} >x</button>
        <div className={styles.links}>
        </div>
    </div> 
  )
}

export default NavBar