import React from 'react'
import styles from './ColorPicker.module.css'

const ColorPicker = ({setColor}) => {

  const colors = ['white', '#262626', 'magenta', 'red', 'teal', 'grey']

  return (
    <div className={styles.colors}>
        {colors.map((c, i) => <button className={styles.roundBtn} style={{backgroundColor: `${c}`}} key={i} onClick={() => setColor(c)}></button>)}
      </div>
  )
}

export default ColorPicker