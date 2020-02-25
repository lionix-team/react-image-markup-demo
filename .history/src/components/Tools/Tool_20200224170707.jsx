import React, { Component } from 'react';
import style from './Tool.module.css';
class Tool extends Component {
  constructor(props) {
    super(props)
    
    this.eventOnClick = props.event;

    if(props.cropper){

    }
    console.log(this.eventOnClick,"LLL")
  }
  
  render() {
    return (
      <div className={style.tool} onClick={() => this.event} >
        <i className={this.props.iconClassName}></i>
      </div>
    );
  }

}
export default Tool;
