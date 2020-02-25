import React from 'react';
import './App.css';
import Editor from 'react-image-markup';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.editor = React.createRef();
    this.state = {
      colors: ['black', 'red', 'green', 'yellow', 'blue', 'pink', 'orange', 'purple', 'crimson'],
      croppingImage: false,
    }
  }
  toggleCropper = () =>{
    this.setState(prev => ({
      croppingImage: !prev.isOpened
    }),
    )
  }
  render() {
    const { croppingImage } = this.state;
    return (
      <div className="app"> 
        
        <div className="container">
          <div className="tools">
            <ColorPanel colors={this.state.colors} />
            <Tool iconClassName="fas fa-font fa-lg" event={() => this.editor.current.set('text')} />
            <Tool iconClassName="fas fa-pencil-alt fa-lg" event={() => this.editor.current.set('freeDrawing')} />
            <Tool iconClassName="far fa-circle fa-lg" event={() => this.editor.current.set('circle')} />
            <Tool iconClassName="far fa-square fa-lg" event={() => this.editor.current.set('rect')} />
            <Tool iconClassName="fas fa-long-arrow-alt-down fa-lg" event={() => this.editor.current.set('arrow')} />
            <Tool iconClassName="fas fa-arrows-alt fa-lg" event={() => this.editor.current.set('selectMode')} />
            <Tool
              iconClassName={croppingImage ? "far fa-check-circle fa-lg" : "fas fa-crop-alt fa-lg"}
              event={croppingImage ? () => this.editor.current.applyCropping() : () => this.editor.current.set('crop')
             }  toggleCrop={ () => this.toggleCropper()}
            />
          </div>
          <div className="editor">
            <Editor height="700" width="700" ref={this.editor} />
          </div>
        </div>
      </div>)
  }
}



export default App;
