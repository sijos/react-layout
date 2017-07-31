import React from 'react';

class Subtotal extends React.Component {

  render() {
    return (
      <div class="internal-pad-1">
        <div class="row">
          <div class="col-sm-6">
            <div class="email-recycling-options"><input type="checkbox" name="recycling_options" /> &nbsp; Yes, email me about recycling options</div>
          </div>
          <div class="col-sm-6">
            <div class="total-pricing-sec">
              <div class="row">
                <div class="col-sm-6 tabletresp1">&nbsp;</div>
                <div class="col-sm-6 tabletresp2">
                  <div class="row">
                    <div class="col-sm-6 resp">
                      <h5>Bag Subtotal</h5>
                    </div>
                    <div class="col-sm-6 resp">
                      <div class="price">$769.00</div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-6 botbor resp">
                      <h5 class="green">Free Shipping</h5>
                    </div>
                    <div class="col-sm-6 botbor resp">
                      <div class="price green">$0.00</div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-6 resp">
                      <h4>Order Total</h4>
                    </div>
                    <div class="col-sm-6 resp">
                      <div class="total-price">$769.00</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <div class="row">
        <div class="col-sm-12">
          <div class="enter-promocode">
            <div class="enter-promo-field-div" id="promoFieldDiv" style="display:none;">
                <div class="form-fields">
                  <div class="row">
                    <div class="col-sm-3">
                      <div class="form-group">
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