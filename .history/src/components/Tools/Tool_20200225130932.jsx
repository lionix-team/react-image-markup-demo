import React from 'react';
import style from './Tool.module.css';
const Tool = (props) => {
  handleEvent = () => {

    this.props.toggleCropper();
    this.props.event();
    // }
    // else{
    //   this.props.event();
    // }
  }
  return (
    <div className={style.tool} onClick={this.props.toggleCropper ? this.handleEvent : this.props.event}>
      <i className={this.props.iconClassName}></i>
    </div>
  );

}
export default Tool;
