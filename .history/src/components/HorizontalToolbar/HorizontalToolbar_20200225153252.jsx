import React from 'react';
import style from './HorizontalToolbar.module.css';
const HorizontalToolbar = (props) => {
  let chooseColor = () => {
    props.editor.current.changeColor(props.color)
    props.updateColor(props.color);
  }
  return (
    <div onClick={() => chooseColor()} className={style.picker} style={(props.color) ? { backgroundColor: props.color } : {}}></div>
  );

}
export default HorizontalToolbar;
