import React from 'react';
import style from './Tool.module.css';
class Tool extends React.Component (props) => {
  let cropper = () => {
    if(props.toggleCropper){
        props.toggleCropper()
    }
   
  }
  return (
    <div className={style.tool} onClick={props.event}>
      <i className={props.iconClassName}></i>
    </div>
  );
}

export default Tool;
