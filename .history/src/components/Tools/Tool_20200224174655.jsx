import React from 'react';
import style from './Tool.module.css';
import { render } from '@testing-library/react';
class Tool extends React.Component {
  constructor(props){
    super(props)
  }
  cropper = () => {
    if (this.props.toggleCropper) {
      this.props.toggleCropper()
    }

  }
  render() {
    return (
      <div className={style.tool} onClick={this.props.event}>
        <i className={props.iconClassName}></i>
      </div>
    );
  }
}


export default Tool;
