/* eslint-disable react/prop-types */
import Canvas from "../Canvas/Canvas";
import NavBar from "../NavBar/NavBar";
import styles from "./Designer.module.css"
import products from "../../Data/productsData";
import { useParams } from "react-router";

function Designer() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  console.log(product)
  
  return (
  <div className={styles.fullWidth}>
    <NavBar /> 
    <Canvas product={product} />
  </div>)
}
 
export default Designer;