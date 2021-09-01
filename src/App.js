import './App.css';
import React from 'react';
import HeadingNav from './Header';

import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/closetag';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/monokai.css';

import WebPageModal from './fullScreenPreview';
import 'bootstrap/dist/css/bootstrap.min.css';

class LiveWebEditor extends React.Component {
  constructor(props) {
    super(props);
    this.handleHTMLChange = this.handleHTMLChange.bind(this);
    this.handleCSSChange = this.handleCSSChange.bind(this);
    this.state = {visible: false, htmlValue: '<H1>This is a live code editor</H1>',  cssValue: 'H1 {\n   color: red;\n}\n'};
  }

  handleHTMLChange(e) {
     this.setState({ htmlValue: e.getValue('') });
  }
  
  handleCSSChange(e) {
    this.setState({ cssValue: e.getValue('') });
  }
  
  
  updateVisibility = () => {
    this.setState({ visible: !this.state.visible })
  };

  render() {
    return (
      <div id="main">
        <HeadingNav css={this.state.cssValue} html={this.state.htmlValue} wholeHtml={"<html><head><meta charset=utf-8><title>Live Editor</title><style>"+this.state.cssValue + "</style></head><body>"+this.state.htmlValue+"</body></html>"}/>
        <div className="App">
          <div className="editorBox" id="htmlBox">
            <p className="editorLabel">HTML</p>
            <CodeMirror value={this.state.htmlValue} options={{theme: 'monokai', keyMap: 'sublime', mode: 'html', autoCloseTags: true}} onChange={this.handleHTMLChange}/>
          </div>
          
          <div className="editorBox" id="cssBox">
            <p className="editorLabel">CSS</p>
            <CodeMirror value={this.state.cssValue} options={{theme: 'monokai', keyMap: 'sublime', mode: 'css', autoCloseBrackets: true}} onChange={this.handleCSSChange}/>
          </div>
          
          <div id="codePreview" className="editorBox">
            <p className="editorLabel" id="liveViewLabel">Live View</p>
            <button id="fullscreenLabel" onClick={this.updateVisibility}>Full Screen</button>
            <iframe title="CodePreview" id="iframePreview" srcDoc={"<html><head><meta charset=utf-8><title>Live Editor</title><style>"+this.state.cssValue + "</style></head><body>"+this.state.htmlValue+"</body></html>"} src="preview.html"></iframe>
            
            <WebPageModal show={this.state.visible} onHide={this.updateVisibility} css={this.state.cssValue} html={this.state.htmlValue}/>
          </div>
        </div>
      </div>
    );
  }
}

export default LiveWebEditor;