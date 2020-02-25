import React from 'react';
import style from './ColorPicker.module.css';
import { changeColor } from '../../../../node_modules/react-image-markup/src/'
const ColorPicker = (props) => {
  let chooseColor = () => {
    console.log(Editor,"AA")
    props.updateColor(props.color);
  }
  return (
    <div onClick={() => chooseColor()} className={style.picker} style={(props.color) ? { backgroundColor: props.color } : {}}></div>
  );

}
export default ColorPicker;
