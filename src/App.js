import './App.css';
import React from 'react';

import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/monokai.css';

class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    this.handleHTMLChange = this.handleHTMLChange.bind(this);
    this.handleCSSChange = this.handleCSSChange.bind(this);
    this.state = { htmlValue: '<H1>This is a live code editor</H1>',  cssValue: 'H1 {\n   color: red;\n}\n'};
  }

  handleHTMLChange(e) {
    //this.setState({ htmlValue: CodeMirror.getValue });
     this.setState({ htmlValue: e.getValue('') });
  }
  
  handleCSSChange(e) {
    this.setState({ cssValue: e.getValue('') });
  }
  
  useEffect() {
    CodeMirror.closeTags();
  }

  render() {
    return (
      <div className="App">
        <div className="editorBox" id="htmlBox">
          <p className="editorLabel">HTML</p>
          <CodeMirror value={this.state.htmlValue} options={{theme: 'monokai', keyMap: 'sublime', mode: 'html', autoCloseTags: true, autoCloseBrackets: true, matchTags: false}} onChange={this.handleHTMLChange}/>
        </div>
        
        <div className="editorBox" id="cssBox">
          <p className="editorLabel">CSS</p>
          <CodeMirror value={this.state.cssValue} options={{theme: 'monokai', keyMap: 'sublime', mode: 'css'}} onChange={this.handleCSSChange}/>
        </div>
        
        <div id="codePreview" className="editorBox">
          <p className="editorLabel">Live View</p>
          <iframe title="CodePreview" id="iframePreview" srcDoc={"<html><head><style>"+this.state.cssValue + "</style></head><body>"+this.state.htmlValue+"</body</html>"} src="preview.html">test</iframe>
        </div>
      </div>
    );
  }
}

export default MarkdownEditor;