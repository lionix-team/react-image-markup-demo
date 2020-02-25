import React from 'react';
import style from './Tool.module.css';
class Tool extends React.Component {
  constructor(props){
    super(props)
    if(props.toggleCropper && props.event){
        props.toggleCropper(props.crop)
    }
  }
  render() {
    return (
      <div className={style.tool} onClick={this.props.event} style={(this.props.crop) ? { display: 'block'} : {}}>
        <i className={this.props.iconClassName}></i>
      </div>
    );
  }
}
export default Tool;
