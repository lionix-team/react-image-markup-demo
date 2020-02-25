import React from 'react';
import style from './Tool.module.css';
const Tool = (props) => {
  let cropperImage = false;
  let cropper = () => {
    if(props.toggleCropper){
        props.toggleCropper()
    }
   
  }
  return (
    <div className={style.tool} onClick={props.event ? props.event : cropper} style={!props.event && cropperImage ? { display: 'none' } : {}}>
      <i className={props.iconClassName}></i>
    </div>
  );
}

export default Tool;