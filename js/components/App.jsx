import React from 'react';
import Header from './Header';
import MainContent from './MainContent';

class App extends React.Component {

  render() {
    return(
      <div className="site-wrapper">
        <Header />
        <MainContent />
      </div>);
  }
}

export default App;