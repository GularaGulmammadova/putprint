import styles from './ColorPicker.module.css'

const ColorPicker = ({type, setColor}) => {

  const colors = type==='tshirt' ? ['white', '#262626', 'magenta', 'red', 'teal', 'grey'] : ['white', '#262626'];

  return (
    <div className={type!=='tshirt' ? styles.twoColors : styles.colors}>
        {colors.map((c, i) => <button className={styles.roundBtn} style={{backgroundColor: `${c}`}} key={i} onClick={() => setColor(c)}></button>)}
      </div> 
  )
}

export default ColorPicker