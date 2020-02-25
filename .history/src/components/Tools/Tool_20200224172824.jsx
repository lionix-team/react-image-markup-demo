import React from 'react';
import style from './Tool.module.css';
const Tool = (props) => {
    console.log(props)
    return (
      <div className={style.tool} onClick= { props.event } style={props.croppingImage && !props.cropper ? {} : { display: 'none' }}>
        <i className={props.iconClassName}></i>
      </div>
    );
}
export default Tool;
