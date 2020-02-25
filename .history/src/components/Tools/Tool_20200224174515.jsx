import React from 'react';
import style from './Tool.module.css';
const Tool = (props) => {
  let cropperImage = false;
  let cropper = () => {
    if(props.toggleCropper){
        let x = props.toggleCropper()
        console.log(x,"LLL")
    }
   
  }
  return (
    <div className={style.tool} onClick={props.event && props.toggleCropper}>
      <i className={props.iconClassName}></i>
    </div>
  );
}

export default Tool;
