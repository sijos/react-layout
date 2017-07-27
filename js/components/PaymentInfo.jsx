import React from 'react';

class PaymentInfo extends React.Component {

  render() {
    return (
      <div id="paymentInfoSection" style="display:none;">
        <div class="shipping-contact-form">
          <div class="row">
            <div class="col-sm-3 stabs"></div>
            <div class="col-sm-6 stabs">
              <ul class="store-tabs">
                <li class="active" id="creditcard_tab">Debit/Credit Card</li>
                <li id="financing_tab">Financing</li>
                <li id="giftcard_tab">Store Gift Card</li>
              </ul>
              <div class="clear"></div>
            </div>
            <div class="col-sm-3 stabs"></div>
          </div>
          <div id="creditcard_tab_section" class="tab-sections">
            <div class="row">
              <div class="col-sm-6">
                <div>
                  <fieldset>
                    <div class="form-fields">
                      <div class="row">
                        <div class="col-sm-12">
                          <legend class="label">Country of Billing Address </legend>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-12">
                          <div class="form-group">
                            <select name="country" class="form-control">
                              <option value="United States">United States</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-12">
                          <legend class="label">Billing Contact </legend>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-5">
                          <div class="form-group">
                            <input name="firstname" type="text" id="shipping-user-firstname" class="form-control" placeholder="First Name" />
                          </div>
                        </div>
                        <div class="col-sm-7">
                          <div class="form-group">
                            <input name="lastname" type="text" id="shipping-user-lastname" class="form-control" placeholder="Last Name" />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-3">
                          <div class="form-group">
                            <input name="areacode" type="text" id="" class="form-control" placeholder="Area Code" />
                          </div>
                        </div>
                        <div class="col-sm-9">
                          <div class="form-group">
                            <input name="primaryphone" type="text" id="" class="form-control" placeholder="Primary Phone" />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-3">
                          <div class="form-group">
                            <input name="areacode" type="text" id="" class="form-control" placeholder="Area Code" />
                          </div>
                        </div>
                        <div class="col-sm-9">
                          <div class="form-group">
                            <input name="primaryphone" type="text" id="" class="form-control" placeholder="Primary Phone" />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-12">
                          <div class="form-group">
                            <input name="email" type="text" id="" class="form-control" placeholder="Email Address" />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-12">
                          <legend class="label">Billing Address </legend>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-12">
                          <div class="form-group">
                            <input name="company" type="text" id="" class="form-control" placeholder="Company Name (optional)" />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-12">
                          <div class="form-group">
                            <input name="address" type="text" id="" class="form-control" placeholder="Street Address" />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-12">
                          <div class="form-group">
                            <input name="apt" type="text" id="" class="form-control" placeholder="Apt, Suite, Bldg, Gate Code. (optional)" />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-3">
                          <div class="form-group">
                            <input name="zipcode" type="text" id="" class="form-control" placeholder="Zip Code" />
                          </div>
                        </div>
                        <div class="col-sm-9">
                          <div class="form-group">
                            <div class="enter-zip-txt">Enter Zip for City and State</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="payment-method-selection">
                  <fieldset>
                    <div class="form-fields">
                      <div class="row">
                        <div class="col-sm-12">
                        <legend class="label">Payment Method</legend>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-12">
                          <input class="magic-radio" type="radio" name="paymentmethodradio" id="cardsradio" value="option" />
                          <label for="cardsradio">
                            <img src="images/cards.png" class="pay-method-cards" />
                          </label>
                        </div>
                      </div>
                      <div class="cc-sec-padd">
                        <div class="row">
                          <div class="col-sm-8">
                            <div class="form-group">
                              <input name="ccnum" type="text" id="" class="form-control" placeholder="Debite/Credit Card Number" />
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="form-group">
                              <input name="ccv" type="text" id="" class="form-control" placeholder="Security Code" />
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-sm-2">
                            <div class="form-group">
                              <div class="enter-zip-txt">Expires</div>
                            </div>
                          </div>
                          <div class="col-sm-3">
                            <div class="form-group">
                              <select name="month" class="form-control">
                                <option value="">Month</option>
                              </select>
                            </div>
                          </div>
                          <div class="col-sm-3">
                            <div class="form-group">
                              <select name="year" class="form-control">
                                <option value="">Year</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-12">
                          <input class="magic-radio" type="radio" name="paymentmethodradio" id="paypalradio" value="option" />
                          <label for="paypalradio">
                            <img src="images/paypal.png" style="width:100px;" />
                          </label>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-12">
                          <div class="offers-banner"><img src="images/checkout-financing-offers.jpg" /></div>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>
          </div>
        <div id="financing_tab_section" class="tab-sections" style="display:none;">
            <div class="row">
              <div class="col-sm-3">
                  <div class="financing-sec-img"><img src="images/uflp-barclay-card.png" /></div>
              </div>
              <div class="col-sm-7">
                  <div class="policy-points">
                    <h4>Barclaycard Visa with Apple Rewards</h4>
                    <ul>
                        <li><b>Special financing for up to 18 months.</b><br /> Special financing on purchases made at Apple within the first 30 days of account opening. Restrictions apply. See offer details.(Barclaycard Financing Visa Card)</li>
                        <li><b>Promo period based on purchase amount. </b><br /> 6 months: less than $499, 12 months: $499 to less than $999, 18 months: $999 and over.</li>
                        <li><b>Earn reward points for every purchase. </b><br /> Get 3 points for every $1 spent at Apple, 2 points for every $1 spent at restaurants, and 1 point for every $1 spent on all other purchases. For every 2,500 points
                          earned, receive a $25 Apple Store Gift Card or iTunes Gift Card.
                        </li>
                        <li><b>Apply and, if approved, shop right away at Apple. </b><br /> Sign in with your Apple ID (or create one), and your Barclaycard Visa will automatically appear at checkout.</li>
                    </ul>
                  </div>
              </div>
              <div class="col-sm-2">
                  <div class="apply-button">
                    <a class="btn btn-primary btn-grad-blue" href="#" role="button">Apply</a>
                  </div>
              </div>
            </div>
        </div>
        <div id="giftcard_tab_section" class="tab-sections" style="display:none;">
          <div class="row">
            <div class="col-sm-6">
              <div>
                <fieldset>
                  <div class="form-fields">
                    <div class="row">
                      <div class="col-sm-12">
                        <div class="pull-right small"><a href="#">Same as shipping information</a></div>
                        <legend class="label">Country of Billing Address </legend>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-12">
                        <div class="form-group">
                          <select name="country" class="form-control">
                            <option value="United States">United States</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-12">
                        <legend class="label">Billing Contact </legend>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-5">
                        <div class="form-group">
                          <input name="firstname" type="text" id="shipping-user-firstname" class="form-control" placeholder="First Name" />
                        </div>
                      </div>
                      <div class="col-sm-7">
                        <div class="form-group">
                          <input name="lastname" type="text" id="shipping-user-lastname" class="form-control" placeholder="Last Name" />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-3">
                        <div class="form-group">
                          <input name="areacode" type="text" id="" class="form-control" placeholder="Area Code" />
                        </div>
                      </div>
                      <div class="col-sm-9">
                        <div class="form-group">
                          <input name="primaryphone" type="text" id="" class="form-control" placeholder="Primary Phone" />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-3">
                        <div class="form-group">
                          <input name="areacode" type="text" id="" class="form-control" placeholder="Area Code" />
                        </div>
                      </div>
                      <div class="col-sm-9">
                        <div class="form-group">
                          <input name="primaryphone" type="text" id="" class="form-control" placeholder="Primary Phone" />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-12">
                        <div class="form-group">
                          <input name="email" type="text" id="" class="form-control" placeholder="Email Address" />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-12">
                        <legend class="label">Billing Address </legend>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-12">
                        <div class="form-group">
                          <input name="company" type="text" id="" class="form-control" placeholder="Company Name (optional)" />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-12">
                        <div class="form-group">
                          <input name="address" type="text" id="" class="form-control" placeholder="Street Address" />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-12">
                        <div class="form-group">
                          <input name="apt" type="text" id="" class="form-control" placeholder="Apt, Suite, Bldg, Gate Code. (optional)" />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-3">
                        <div class="form-group">
                          <input name="zipcode" type="text" id="" class="form-control" placeholder="Zip Code" />
                        </div>
                      </div>
                      <div class="col-sm-9">
                        <div class="form-group">
                          <div class="enter-zip-txt">Enter Zip for City and State</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="payment-method-selection">
                <fieldset>
                  <div class="form-fields">
                    <div class="row">
                      <div class="col-sm-12">
                        <legend class="label">Store Gift Card</legend>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-4">
                        <div class="form-group">
                          <input name="pin" type="text" id="" class="form-control" placeholder="Pin" />
                        </div>
                      </div>
                      <div class="col-sm-8">
                        <div class="form-group">
                          <div class="enter-zip-txt"><a href="#">Apply</a></div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-12">
                        <div class="smaller">
                          <ul>
                            <li>Pay with up to eight gift cards</li>
                            <li>iTunes Gift Cards cannot be used for Apple Store purchases</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default PaymentInfo;