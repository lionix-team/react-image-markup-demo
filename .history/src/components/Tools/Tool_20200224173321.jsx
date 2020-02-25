import React from 'react';
import style from './Tool.module.css';
const Tool = (props) => {
    let croppedImage = false;
    let cropper = () => {
      if(props.toggleCropper){
        let props.toggleCropper()
      }
    }
    return (
      <div className={style.tool} onClick= { props.event ,cropper}>
        <i className={props.iconClassName}></i>
      </div>
    );
}
// style={!props.croppingImage && props.cropper ? {display: 'block'} : { display: 'none' }}
export default Tool;
