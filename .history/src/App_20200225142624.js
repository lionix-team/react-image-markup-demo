import React from 'react';
import './App.css';
import Tool from './components/Tools/Tool';
import { Editor } from 'react-image-markup';
import ColorPanel from './components/ColorPanel/ColorPanel';
import '@fortawesome/fontawesome-free/css/all.css'
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
    this.setState(prev => ({
      croppingImage : !prev.croppingImage
    }))
    
  }
  cropImage() {
    this.editor.current.set('crop')
    this.setState(prev => ({
      croppingImage : !prev.croppingImage
    }), );
   
  }
  render() {
    const { croppingImage } = this.state;
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
          <div className="tools">
            <ColorPanel colors={this.state.colors} editor={this.editor} />
            <Tool iconClassName="fas fa-font fa-lg" event={() => this.editor.current.set('text')} />
            <Tool iconClassName="fas fa-pencil-alt fa-lg" event={() => this.editor.current.set('freeDrawing')} />
            <Tool iconClassName="far fa-circle fa-lg" event={() => this.editor.current.set('circle')} />
            <Tool iconClassName="far fa-square fa-lg" event={() => this.editor.current.set('rect')} />
            <Tool iconClassName="fas fa-long-arrow-alt-down fa-lg" event={() => this.editor.current.set('arrow')} />
            <Tool iconClassName="fas fa-arrows-alt fa-lg" event={() => this.editor.current.set('selectMode')} />
            {croppingImage ?
              <Tool iconClassName="far fa-check-circle fa-lg" event={() => this.applyCrop()} /> :
              <Tool iconClassName="fas fa-crop-alt fa-lg" event={() => this.cropImage()} />
            }

          </div>
          <div className="editor">
            <Editor height="700" width="700" ref={this.editor} />
          </div>
        </div>
      </div>)
  }
}
export default App;
