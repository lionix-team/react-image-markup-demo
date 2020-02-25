import React from 'react';
import style from './Tool.module.css';
class Tool extends React.Component {
  constructor(props) {
    super(props)

    if (props.toggleCropper && props.event) {
      props.toggleCropper(props.crop)
    }
  }
  handleEvent(){
    
  }
  render() {
    return (
      <div className={style.tool} onClick={this.props.event}>
        <i className={this.props.iconClassName}></i>
      </div>
    );
  }
}
export default Tool;
