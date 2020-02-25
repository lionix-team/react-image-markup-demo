import React from 'react';
import style from './Tool.module.css';
const Tool = (props) => {
 let handleEvent = (props) => {
    console.log(props,"AAAA")
    
 }
    return (
      <div className={style.tool} onClick={props.toggleCropper ? handleEvent : props.event}>
        <i className={props.iconClassName}></i>
      </div>
    );

  }

export default Tool;
