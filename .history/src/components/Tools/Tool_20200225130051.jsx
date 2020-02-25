import React from 'react';
import style from './Tool.module.css';
class Tool extends React.Component {
  constructor(props) {
    super(props)
    
  }
  handleEvent(){
      this.props.toggleCropper(t)
  }
  render() {
    return (
      <div className={style.tool} onClick={this.handleEvent}>
        <i className={this.props.iconClassName}></i>
      </div>
    );
  }
}
export default Tool;
