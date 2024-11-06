/* eslint-disable react/prop-types */
import styles from './ManageFiles.module.css'
import ColorPicker from '../ColorPicker/ColorPicker'
import { useState } from 'react'

const ManageFiles = ({setColor, productName}) => {

  const [size, setSize] = useState('S');
  const [material, setMaterial] = useState('Nazik');

  const sizes = ['S', 'M', 'L', 'XL', '2XL'];
  const materials = ['Nazik', 'Qalın'];

  return (
    <div className={styles.file}>
      <div className={styles.btns}>
        <button className={styles.btn}>Məhsullar</button>
        <button className={`${styles.btn} ${styles.chosen}`}>Özün yarat</button>
      </div>

      <div className={styles.picker}>
        <h2 className={styles.heading}>Oversize T-shirt</h2>
        <hr className={styles.hr} />
        {productName!=="Eko Çanta" && <>
          <h3 className={styles.title}>Məhsul rəngi</h3>  
          <ColorPicker setColor={setColor} />
        </>}

        <h3 className={styles.title}>Ölçü</h3>   
        <div className={styles.btns}>
          {sizes.map((s, i) => <button className={size===s ? `${styles.chosen} ${styles.roundBtn}` : styles.roundBtn} style={{backgroundColor: `${s}`}} key={i} onClick={() => setSize(s)}>{s}</button>)}
        </div>
        
        <h3 className={styles.title}>Material</h3>   
        <div className={styles.btns}>
          {materials.map((m, i) => <button className={material===m ? `${styles.chosen} ${styles.roundBtn} ${styles.long}` : `${styles.roundBtn} ${styles.long}`} key={i} onClick={() => setMaterial(m)}>{m}</button>)}
        </div>

        <div className={styles.spaceBetween}>
          <h3 className={styles.title}>Ümümi Qiymət</h3>
          <h3 className={styles.title}>25 AZN</h3>
        </div> 
        
        <button className={styles.orderBtn}>Sifariş et</button>
      </div>

      <div className={styles.warning}>
        <h3>{`! Don't go out of the borders`}</h3>
      </div>
    </div>
  )
}

export default ManageFiles