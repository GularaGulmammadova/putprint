import Canvas from "../Canvas/Canvas";
import NavBar from "../NavBar/NavBar";
import styles from "./Designer.module.css"

function Designer() {
  return (
  <div className={styles.fullWidth}>
    <NavBar /> 
    <Canvas />
  </div>)
}

export default Designer;
