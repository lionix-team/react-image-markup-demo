import React from 'react';
import style from './ColorPicker.module.css';
import { changeColor } from 'react-image-markup'
const ColorPicker = (props) => {
  let chooseColor = () => {
    changeColor(props.color)
    props.updateColor(props.color);
  }
  return (
    <div onClick={() => chooseColor()} className={style.picker} style={(props.color) ? { backgroundColor: props.color } : {}}></div>
  );

}
export default ColorPicker;
