import React from 'react';
import DeliveryPickup from './DeliveryPickup';
import ContinueButton from './ContinueButton';
import ShippingAddress from './ShippingAddress';

class MainContent extends React.Component {

  render() {
    return(
      <div className="delivery-options-page">
        <div className="site-container">
          <div className="delivery-options-box">
            <DeliveryPickup />
            <ContinueButton btnId={"1"}/>
            <ShippingAddress />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContent;