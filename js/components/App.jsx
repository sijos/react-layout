import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './footer';

class App extends React.Component {

  render() {
    return(
      <div className="site-wrapper">
        <Header />
        <MainContent />
        <Footer />
      </div>);
  }
}

export default App;