import React from 'react';
import style from './Tool.module.css';
class Tool extends = (props) => {
    
    return (
      <div className={style.tool} onClick= { props.event } >
        <i className={props.iconClassName}></i>
      </div>
    );
}
export default Tool;
