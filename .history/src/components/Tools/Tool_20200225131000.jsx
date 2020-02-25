import React from 'react';
import style from './Tool.module.css';
const Tool = (props) => {
 let handleEvent = (props) => {

    props.toggleCropper();
    props.event();
    return (
      <div className={style.tool} onClick={props.toggleCropper ? this.handleEvent : this.props.event}>
        <i className={this.props.iconClassName}></i>
      </div>
    );

  }
}
export default Tool;
