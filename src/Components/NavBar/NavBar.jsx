import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className={styles.flex}>
        
        <Link to='/productdetail' className={styles.link} href='#'>x</Link>
        <div className={styles.links}>
        </div>
    </div> 
  )
}

export default NavBar