import React from 'react';
import Tool from '../Tools/Tool';
import ColorPanel from '../ColorPanel/ColorPanel';

class HorizontalToolbar extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
          colors: ['black', 'red', 'green', 'yellow', 'blue', 'pink', 'orange', 'purple', 'crimson'],
          croppingImage: false,
        }
      }
      applyCrop = () => {
        this.props.editor.current.applyCropping()
        this.setState({
          croppingImage: false
        });
      }
      cropImage() {
        this.props.editor.current.set('crop')
        this.setState({
          croppingImage: true
        });
      }
    render(){
        return (
          <div className="header">
          <Tool iconClassName="fas fa-undo-alt fa-lg" event={() => this.editor.current.undo()} />
          <Tool iconClassName="fas fa-redo-alt fa-lg" event={() => this.editor.current.redo()} />
          <Tool iconClassName="fas fa-trash-alt fa-lg" event={() => this.editor.current.clear()} />
          <div className="upload-image">
            <label htmlFor="chooseImage"><Tool iconClassName="fas fa-file-upload fa-lg" /></label>
            <input id="chooseImage" style={{ visibility: 'hidden' }} type="file" onChange={(e) => this.editor.current.uploadImage(e)} accept="image/*" />
          </div>
          <Tool iconClassName="fas fa-save fa-lg" event={() => this.editor.current.saveImageAsFile()} />
        </div>
        );
    }
    

}
export default HorizontalToolbar;
