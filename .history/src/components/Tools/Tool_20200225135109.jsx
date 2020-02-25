import React from 'react';
import style from './Tool.module.css';
const Tool = (props) => {
 async handleEvent = () => {
  props.event();
  promise.then(res => console.log(res))
  props.toggleCropper()

 }
    return (
      <div className={style.tool} onClick={props.toggleCropper ? handleEvent : props.event}>
        <i className={props.iconClassName}></i>
      </div>
    );

  }

export default Tool;
