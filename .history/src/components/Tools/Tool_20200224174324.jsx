import React from 'react';
import style from './Tool.module.css';
const Tool = (props) => {
  let cropperImage = false;
  let cropper = () => {
    if(props.toggleCropper){
        let x = props.toggleCropper()
        console.log(x)
    }
   
  }
  console.log(props.event,props.toggleCropper)
  return (
    <div className={style.tool} onClick={props.event ? props.event : cropper}>
      <i className={props.iconClassName}></i>
    </div>
  );
}

export default Tool;
