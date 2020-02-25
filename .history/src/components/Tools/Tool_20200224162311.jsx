import React from 'react';
import style from './Tool.module.css';
import { Component } from 'react';
class Tool extends Component = (props) => {
    
    return (
      <div className={style.tool} onClick= { props.event } >
        <i className={props.iconClassName}></i>
      </div>
    );
}
export default Tool;
