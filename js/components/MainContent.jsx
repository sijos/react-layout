import React from 'react';
import DeliveryPickup from './DeliveryPickup';
import ContinueButton from './ContinueButton';
import ShippingAddress from './ShippingAddress';
import PaymentInfo from './PaymentInfo';
import CreateAccount from './CreateAccount';
import Subtotal from './Subtotal';

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
            <ContinueButton btnId={"3"} hidden={true} />
            <CreateAccount />
            <ContinueButton btnId={"4"} hidden={true} />
            <Subtotal />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContent;