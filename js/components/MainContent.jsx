import React from 'react';
import DeliveryPickup from './DeliveryPickup';

class MainContent extends React.Component {

  render() {
    return(
      <div className="delivery-options-page">
        <div className="site-container">
          <div className="delivery-options-box">
            <DeliveryPickup />
          </div>
        </div>
      </div>
  );
  }
}

export default MainContent;