import React, { Component } from 'react';
import style from './Tool.module.css';
class Tool extends Component {
  constructor(props){
    
  }
    render(){
      return (
        <div className={style.tool} onClick= { props.event } >
          <i className={props.iconClassName}></i>
        </div>
      );
    }
    
}
export default Tool;
