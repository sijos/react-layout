import React from 'react';

class Header extends React.Component {
  render() {
    return(
      <header>
        <div className="header">
            <div className="header-container">
              <div className="header-resp-back">
                  <a href="#"><img src="images/chevron-left.png" /></a>
              </div>
              <div className="logo"><img src="images/logo.png" /></div>
              <div className="main-navigation">
              <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Mac</a></li>
              <li><a href="#">iPhone</a></li>
              <li><a href="#">iPad</a></li>
              <li><a href="#">Watch</a></li>
              <li><a href="#">Support</a></li>
              </ul>
              </div>
              <div className="clear"></div>
            </div>
        </div>
      </header>
    );
  }
}

export default Header;