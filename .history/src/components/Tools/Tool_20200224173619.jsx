import React from 'react';
import style from './Tool.module.css';
const Tool = (props) => {
    let cropper = () => {
      console.log("LLL")
        props.toggleCropper()
    }
    return (
      <div className={style.tool} onClick= { props.event ? props.event : cropper }>
        <i className={props.iconClassName}></i>
      </div>
    );
}
// style={!props.croppingImage && props.cropper ? {display: 'block'} : { display: 'none' }}
export default Tool;
