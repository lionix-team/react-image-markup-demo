import React, { Component } from 'react';
import style from './Tool.module.css';
class Tool extends Component {
  constructor(props) {
    super(props)
    console.log(props.event)
    if(props.cropper){

    }
  }
  
  render() {
    return (
      <div className={style.tool} onClick={this.props.event} >
        <i className={this.props.iconClassName}></i>
      </div>
    );
  }

}
export default Tool;
