import React from 'react';
import style from './Tool.module.css';
const Tool = (props) => {
 let handleEvent = () => {
   let promise = 
  props.event();
  props.toggleCropper()

 }
    return (
      <div className={style.tool} onClick={props.toggleCropper ? handleEvent : props.event}>
        <i className={props.iconClassName}></i>
      </div>
    );

  }

export default Tool;
