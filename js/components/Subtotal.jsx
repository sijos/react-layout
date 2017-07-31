import React from 'react';

class Subtotal extends React.Component {

  render() {
    return (
      <div className="internal-pad-1">
        <div className="row">
          <div className="col-sm-6">
            <div className="email-recycling-options"><input type="checkbox" name="recycling_options" /> &nbsp; Yes, email me about recycling options</div>
          </div>
          <div className="col-sm-6">
            <div className="total-pricing-sec">
              <div className="row">
                <div className="col-sm-6 tabletresp1">&nbsp;</div>
                <div className="col-sm-6 tabletresp2">
                  <div className="row">
                    <div className="col-sm-6 resp">
                      <h5>Bag Subtotal</h5>
                    </div>
                    <div className="col-sm-6 resp">
                      <div className="price">$769.00</div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6 botbor resp">
                      <h5 className="green">Free Shipping</h5>
                    </div>
                    <div className="col-sm-6 botbor resp">
                      <div className="price green">$0.00</div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6 resp">
                      <h4>Order Total</h4>
                    </div>
                    <div className="col-sm-6 resp">
                      <div className="total-price">$769.00</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="enter-promocode">
            <div className="enter-promo-field-div" id="promoFieldDiv" style={{display: "none"}}>
                <div className="form-fields">
                  <div className="row">
                    <div className="col-sm-3">
                      <div className="form-group">
                        <input name="promo-code" type="text" id="" placeholder="Promo Code" /> &nbsp;
                        <a href="#">Apply</a>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <a href="#" id="enterpromocodelink">Enter Promo Code</a>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Subtotal;