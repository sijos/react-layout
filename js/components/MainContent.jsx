import React from 'react';
import DeliveryPickup from './DeliveryPickup';
import ContinueButton from './ContinueButton';
import ShippingAddress from './ShippingAddress';
import PaymentInfo from './PaymentInfo';

class MainContent extends React.Component {

  render() {
    return(
      <div className="delivery-options-page">
        <div className="site-container">
          <div className="delivery-options-box">
            <DeliveryPickup />
            <ContinueButton btnId={"1"} hidden={false} />
            <ShippingAddress />
            <ContinueButton btnId={"2"} hidden={true} />
            <PaymentInfo />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContent;