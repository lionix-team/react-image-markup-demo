import React from 'react';
import './App.css';
import Tool from './components/Tools/Tool';
import { Editor } from 'react-image-markup';

import '@fortawesome/fontawesome-free/css/all.css'
import HorizontalToolbar from './components/HorizontalToolbar/HorizontalToolbar';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.editor = React.createRef();
    this.state = {
      colors: ['black', 'red', 'green', 'yellow', 'blue', 'pink', 'orange', 'purple', 'crimson'],
      croppingImage: false,
    }
  }
  applyCrop = () => {
    this.editor.current.applyCropping()
    this.setState({
      croppingImage: false
    });
  }
  cropImage() {
    this.editor.current.set('crop')
    this.setState({
      croppingImage: true
    });


  }

  render() {
    return (
      <div className="app">

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
        <div className="container">
          <HorizontalToolbar editor="/>
          <div className="editor">
            <Editor height="700" width="700" ref={this.editor} />
          </div>
        </div>
      </div>)
  }
}
export default App;
