import React from 'react';
import style from './Tool.module.css';
const Tool = (props) => {
    if(props)
    return (
      <div className={style.tool} onClick= { props.event } style={!props.croppingImage && props.cropper ? {display: 'block'} : { display: 'none' }}>
        <i className={props.iconClassName}></i>
      </div>
    );
}
export default Tool;
