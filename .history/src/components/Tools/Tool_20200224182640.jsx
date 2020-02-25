import React from 'react';
import style from './Tool.module.css';
class Tool extends React.Component {
  constructor(props) {
    super(props)
    
  }
  handeEvent(){
    console.log("HANS")
    if (this.props.toggleCropper && this.props.event) {
      this.props.toggleCropper(this.props.crop)
    }
  }
  render() {
    return (
      <p>dasdasd</p>
    );
  }
}
export default Tool;
