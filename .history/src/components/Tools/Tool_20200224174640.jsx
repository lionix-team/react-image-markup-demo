import React from 'react';
import style from './Tool.module.css';
import { render } from '@testing-library/react';
class Tool extends React.Component {
  constructor(props){
    super(props)
  }
  cropper = () => {
    if (props.toggleCropper) {
      props.toggleCropper()
    }

  }
  render() {
    return (
      <div className={style.tool} onClick={props.event}>
        <i className={props.iconClassName}></i>
      </div>
    );
  }
}


export default Tool;
