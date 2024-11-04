/* eslint-disable react/prop-types */
import Canvas from "../Canvas/Canvas";
import NavBar from "../NavBar/NavBar";
import styles from "./Designer.module.css"

function Designer({frontSide, backSide}) {
  return (
  <div className={styles.fullWidth}>
    <NavBar /> 
    <Canvas frontSide={frontSide} backSide={backSide} />
  </div>)
}
 
export default Designer;
