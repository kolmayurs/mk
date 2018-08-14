import React, { Component } from 'react';
import './App.css';
import menu from './img/menu.png';
import close from './img/close.png';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {leftpanel: false, rightpanel:false}
    this.toggleLeftPanel = this.toggleLeftPanel.bind(this);
    this.toggleRightPanel = this.toggleRightPanel.bind(this);
  }
  toggleLeftPanel(){
    this.setState({leftpanel: !this.state.leftpanel});
  }
  toggleRightPanel(){
    this.setState({rightpanel: !this.state.rightpanel});
  }
  render() {
    return (
      <div className="App">
        <header>
          <div className="header-container">
            <div className="logo" onClick={this.toggleLeftPanel}><img src={menu} alt="Menu" title="Menu" width="50" height="50" /></div>
            <div className="logo" onClick={this.toggleRightPanel}><img src={menu} alt="Menu" title="Menu" width="50" height="50" /></div>
          </div>
        </header>
        <div className={this.state.leftpanel?'menu-sidebar menu-sidebar-open':'menu-sidebar menu-sidebar-closed'}>
          <div className="close-menu-sidebar" onClick={this.toggleLeftPanel}><img src={close} alt="Close" title="Close" width="50" height="50" /></div>
        </div>
        <div className={this.state.rightpanel?'chat-sidebar chat-sidebar-open':'chat-sidebar chat-sidebar-closed'}>
          <div className="close-chat-sidebar" onClick={this.toggleRightPanel}><img src={close} alt="Close" title="Close" width="50" height="50" /></div>
        </div>
      </div>
    );
  }
}

export default App;
