import React from 'react';
// import style from './horizontalToolbar.module.css';
import Tool from '../Tools/Tool';
import ColorPanel from '../ColorPanel/ColorPanel'
class HorizontalToolbar extends React.Component {
    render(){
        
    }
    return (
        <div className="tools">
            <ColorPanel colors={this.state.colors} editor={props.editor} />

            <Tool iconClassName="fas fa-font fa-lg" event={() => this.editor.current.set('text')} />
            <Tool iconClassName="fas fa-pencil-alt fa-lg" event={() => this.editor.current.set('freeDrawing')} />
            <Tool iconClassName="far fa-circle fa-lg" event={() => this.editor.current.set('circle')} />
            <Tool iconClassName="far fa-square fa-lg" event={() => this.editor.current.set('rect')} />
            <Tool iconClassName="fas fa-long-arrow-alt-down fa-lg" event={() => this.editor.current.set('arrow')} />
            <Tool iconClassName="fas fa-arrows-alt fa-lg" event={() => this.editor.current.set('selectMode')} />
            {this.state.croppingImage ?
                <Tool iconClassName="far fa-check-circle fa-lg" event={() => this.applyCrop()} /> :
                <Tool iconClassName="fas fa-crop-alt fa-lg" event={() => this.cropImage()} />
            }
        </div>
    );

}
export default HorizontalToolbar;
