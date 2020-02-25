import React, { Component } from 'react';
import style from './Tool.module.css';
class Tool extends Component {
  constructor(props) {
    super(props)
    console.log(props)
  }
  componentDidMount(){
    console.log(this.props.event)
  }
  render() {
    return (
      <div className={style.tool} onClick={this.props.event ? this.props.event : this.props.cropper} >
        <i className={this.props.iconClassName}></i>
      </div>
    );
  }

}
export default Tool;
