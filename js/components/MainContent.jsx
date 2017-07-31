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
            <div className="bottom-box-text">
              <p>By clicking Place Order Now, you accept and agree to all terms of Apple's Sales and RefundsSales and Refunds Policy. A receipt will be provided to you electronically that contains these terms and an itemized list of your purchase including
                taxes and shipping charges, if any.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainContent;