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
  }
  render() {
    return (
      <div className="app">

        <div className="header">
          
        </div>
        <div className="container">
          <HorizontalToolbar editor={this.editor}/>
          <div className="editor">
            <Editor height="700" width="700" ref={this.editor} />
          </div>
        </div>
      </div>)
  }
}
export default App;
