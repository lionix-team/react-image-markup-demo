import React, { Component } from 'react';
import style from './Tool.module.css';
class Tool extends Component {
  constructor(props) {
    super(props)
    
    this.eventOnClick = props.event;

    if(props.cropper){

    }
  }
  
  render() {
    return (
      <div className={style.tool} onClick={} >
        <i className={this.props.iconClassName}></i>
      </div>
    );
  }

}
export default Tool;
