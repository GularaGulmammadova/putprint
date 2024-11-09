// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import styles from './FontFamilyDropDown.module.css';

// eslint-disable-next-line react/prop-types
const FontFamilyDropDown = ({ fontFamily, setFontFamily }) => {

  const fontFamilies = [
    'Impact',
    'Arial',
    'Courier New',
    'Georgia',
    'Times New Roman',
    'Trebuchet MS',
    'Verdana',
    'Helvetica',
    'Cursive'
  ];

  return (
    <div>
      <select
        className={styles.input}
        id="font-family-select"
        value={fontFamily}
        onChange={(e) => setFontFamily(e.target.value)}
      >
        {fontFamilies.map((fontFamily) => (
          <option key={fontFamily} value={fontFamily}>
            {fontFamily}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FontFamilyDropDown;
