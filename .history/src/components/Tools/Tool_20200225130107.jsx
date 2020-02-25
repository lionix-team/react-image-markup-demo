import React from 'react';
import style from './Tool.module.css';
class Tool extends React.Component {
  constructor(props) {
    super(props)
    
  }
  handleEvent(){
    if(this.toggleCropper){
      
    }
      this.props.toggleCropper()
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
