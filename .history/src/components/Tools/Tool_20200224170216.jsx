import React, { Component } from 'react';
import style from './Tool.module.css';
class Tool extends Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      cropper: false
    }
  }
  
  render() {
    return (
      <div className={style.tool} onClick={this.state.cropper ? this.props.editor.current.set('crop') : this.props.event} >
        <i className={this.props.iconClassName}></i>
      </div>
    );
  }

}
export default Tool;
