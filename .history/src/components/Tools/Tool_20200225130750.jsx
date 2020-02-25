import React from 'react';
import style from './Tool.module.css';
class Tool extends React.Component {
  constructor(props) {
    super(props)
  }
  handleEvent(){
    // console.log(this.props,"A")
    // if(this.props && this.props.toggleCropper){
      this.props.toggleCropper();
      this.props.event();
    // }
    // else{
    //   this.props.event();
    // }
  }
  render() {
    return (
      <div className={style.tool} onClick={this.props.toggleCropper ? this.handleEvent : this.props.event}>
        <i className={this.props.iconClassName}></i>
      </div>
    );
  }
}
export default Tool;
