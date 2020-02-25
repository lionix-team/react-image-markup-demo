import React from 'react';
import style from './Tool.module.css';
const Tool = (props) => {
  let cropperImage = false;
  let cropper = () => {
    if(props.toggleCropper){
        props.toggleCropper()
    }
   
  }
  console.log(props.event,)
  return (
    <div className={style.tool} onClick={props.event ? props.event : cropper}>
      <i className={props.iconClassName}></i>
    </div>
  );
}

export default Tool;
