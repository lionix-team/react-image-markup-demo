import React from 'react';
import style from './Tool.module.css';
const Tool = (props) => {
    console.log(props)
    props.toggleCrop;
    return (
      <div className={style.tool} onClick= { props.event } >
        <i className={props.iconClassName}></i>
      </div>
    );
}
export default Tool;
