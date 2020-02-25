import React, { Component } from 'react';
import style from './Tool.module.css';
class Tool extends Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.event = props.event
  }
  render() {
    return (
      <div className={style.tool} onClick={this.event,this.props.toggleCrop } >
        <i className={this.props.iconClassName}></i>
      </div>
    );
  }

}
export default Tool;
