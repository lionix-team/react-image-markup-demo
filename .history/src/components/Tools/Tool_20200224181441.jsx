import React from 'react';
import style from './Tool.module.css';
class Tool extends React.Component {
  constructor(props) {
    super(props)
    
  }
  handleEvent(){
    if (this.props.toggleCropper && this.props.event) {
      this.props.toggleCropper(this.props.crop)
    }
  }
  componentDidMount(){
    this.
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
