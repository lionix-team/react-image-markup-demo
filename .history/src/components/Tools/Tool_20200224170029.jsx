import React, { Component } from 'react';
import style from './Tool.module.css';
class Tool extends Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      cropper: false
    }
  }
  componentDidMount(){
    if(!this.props.event){
        this.setState({cropper:true})
    }
  }
  render() {
    return (
      <div className={style.tool} onClick={} >
        <i className={this.props.iconClassName}></i>
      </div>
    );
  }

}
export default Tool;
