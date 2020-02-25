import React from 'react';
import style from './Tool.module.css';
const Tool = (props) => {
    if(props.toggleCropper){
      props.toggleCropper
    }
    let cropper = () => {
      
    }
    return (
      <div className={style.tool} onClick= { props.event }>
        <i className={props.iconClassName}></i>
      </div>
    );
}
// style={!props.croppingImage && props.cropper ? {display: 'block'} : { display: 'none' }}
export default Tool;
