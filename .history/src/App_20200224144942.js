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
        
          <div className="editor">
            <Editor height="700" width="700" ref={this.editor} />
          </div>
        </div>
      </div>)
  }
}



export default App;
