import React from 'react';

class PaymentInfo extends React.Component {

  render() {
    return (
      <div>
        <h2 className="subheading" id="paymentInfoHeading"><span className="iconnic">3</span> Payment <a className="btn btn-secondary edit-button pull-right" id="paymentInfoEditButton" href="#" role="button">Edit</a></h2>
        <div id="paymentInfoSection" style={{display:"none"}}>
          <div className="shipping-contact-form">
            <div className="row">
              <div className="col-sm-3 stabs"></div>
              <div className="col-sm-6 stabs">
                <ul className="store-tabs">
                  <li className="active" id="creditcard_tab">Debit/Credit Card</li>
                  <li id="financing_tab">Financing</li>
                  <li id="giftcard_tab">Store Gift Card</li>
                </ul>
                <div className="clear"></div>
              </div>
              <div className="col-sm-3 stabs"></div>
            </div>
            <div id="creditcard_tab_section" className="tab-sections">
              <div className="row">
                <div className="col-sm-6">
                  <div>
                    <fieldset>
                      <div className="form-fields">
                        <div className="row">
                          <div className="col-sm-12">
                            <legend className="label">Country of Billing Address </legend>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="form-group">
                              <select name="country" className="form-control">
                                <option value="United States">United States</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-12">
                            <legend className="label">Billing Contact </legend>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-5">
                            <div className="form-group">
                              <input name="firstname" type="text" id="shipping-user-firstname" className="form-control" placeholder="First Name" />
                            </div>
                          </div>
                          <div className="col-sm-7">
                            <div className="form-group">
                              <input name="lastname" type="text" id="shipping-user-lastname" className="form-control" placeholder="Last Name" />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-3">
                            <div className="form-group">
                              <input name="areacode" type="text" id="" className="form-control" placeholder="Area Code" />
                            </div>
                          </div>
                          <div className="col-sm-9">
                            <div className="form-group">
                              <input name="primaryphone" type="text" id="" className="form-control" placeholder="Primary Phone" />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-3">
                            <div className="form-group">
                              <input name="areacode" type="text" id="" className="form-control" placeholder="Area Code" />
                            </div>
                          </div>
                          <div className="col-sm-9">
                            <div className="form-group">
                              <input name="primaryphone" type="text" id="" className="form-control" placeholder="Primary Phone" />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="form-group">
                              <input name="email" type="text" id="" className="form-control" placeholder="Email Address" />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-12">
                            <legend className="label">Billing Address </legend>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="form-group">
                              <input name="company" type="text" id="" className="form-control" placeholder="Company Name (optional)" />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="form-group">
                              <input name="address" type="text" id="" className="form-control" placeholder="Street Address" />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="form-group">
                              <input name="apt" type="text" id="" className="form-control" placeholder="Apt, Suite, Bldg, Gate Code. (optional)" />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-3">
                            <div className="form-group">
                              <input name="zipcode" type="text" id="" className="form-control" placeholder="Zip Code" />
                            </div>
                          </div>
                          <div className="col-sm-9">
                            <div className="form-group">
                              <div className="enter-zip-txt">Enter Zip for City and State</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="payment-method-selection">
                    <fieldset>
                      <div className="form-fields">
                        <div className="row">
                          <div className="col-sm-12">
                          <legend className="label">Payment Method</legend>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-12">
                            <input className="magic-radio" type="radio" name="paymentmethodradio" id="cardsradio" value="option" />
                            <label htmlFor="cardsradio">
                              <img src="images/cards.png" className="pay-method-cards" />
                            </label>
                          </div>
                        </div>
                        <div className="cc-sec-padd">
                          <div className="row">
                            <div className="col-sm-8">
                              <div className="form-group">
                                <input name="ccnum" type="text" id="" className="form-control" placeholder="Debite/Credit Card Number" />
                              </div>
                            </div>
                            <div className="col-sm-4">
                              <div className="form-group">
                                <input name="ccv" type="text" id="" className="form-control" placeholder="Security Code" />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-2">
                              <div className="form-group">
                                <div className="enter-zip-txt">Expires</div>
                              </div>
                            </div>
                            <div className="col-sm-3">
                              <div className="form-group">
                                <select name="month" className="form-control">
                                  <option value="">Month</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-sm-3">
                              <div className="form-group">
                                <select name="year" className="form-control">
                                  <option value="">Year</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-12">
                            <input className="magic-radio" type="radio" name="paymentmethodradio" id="paypalradio" value="option" />
                            <label htmlFor="paypalradio">
                              <img src="images/paypal.png" style={{width: "100px"}}/>
                            </label>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="offers-banner"><img src="images/checkout-financing-offers.jpg" /></div>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </div>
              </div>
            </div>
          <div id="financing_tab_section" className="tab-sections" style={{display: "none"}}>
              <div className="row">
                <div className="col-sm-3">
                    <div className="financing-sec-img"><img src="images/uflp-barclay-card.png" /></div>
                </div>
                <div className="col-sm-7">
                    <div className="policy-points">
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
                <div className="col-sm-2">
                    <div className="apply-button">
                      <a className="btn btn-primary btn-grad-blue" href="#" role="button">Apply</a>
                    </div>
                </div>
              </div>
          </div>
          <div id="giftcard_tab_section" className="tab-sections" style={{display: "none"}}>
            <div className="row">
              <div className="col-sm-6">
                <div>
                  <fieldset>
                    <div className="form-fields">
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="pull-right small"><a href="#">Same as shipping information</a></div>
                          <legend className="label">Country of Billing Address </legend>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="form-group">
                            <select name="country" className="form-control">
                              <option value="United States">United States</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          <legend className="label">Billing Contact </legend>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-5">
                          <div className="form-group">
                            <input name="firstname" type="text" id="shipping-user-firstname" className="form-control" placeholder="First Name" />
                          </div>
                        </div>
                        <div className="col-sm-7">
                          <div className="form-group">
                            <input name="lastname" type="text" id="shipping-user-lastname" className="form-control" placeholder="Last Name" />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-3">
                          <div className="form-group">
                            <input name="areacode" type="text" id="" className="form-control" placeholder="Area Code" />
                          </div>
                        </div>
                        <div className="col-sm-9">
                          <div className="form-group">
                            <input name="primaryphone" type="text" id="" className="form-control" placeholder="Primary Phone" />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-3">
                          <div className="form-group">
                            <input name="areacode" type="text" id="" className="form-control" placeholder="Area Code" />
                          </div>
                        </div>
                        <div className="col-sm-9">
                          <div className="form-group">
                            <input name="primaryphone" type="text" id="" className="form-control" placeholder="Primary Phone" />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="form-group">
                            <input name="email" type="text" id="" className="form-control" placeholder="Email Address" />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          <legend className="label">Billing Address </legend>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="form-group">
                            <input name="company" type="text" id="" className="form-control" placeholder="Company Name (optional)" />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="form-group">
                            <input name="address" type="text" id="" className="form-control" placeholder="Street Address" />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="form-group">
                            <input name="apt" type="text" id="" className="form-control" placeholder="Apt, Suite, Bldg, Gate Code. (optional)" />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-3">
                          <div className="form-group">
                            <input name="zipcode" type="text" id="" className="form-control" placeholder="Zip Code" />
                          </div>
                        </div>
                        <div className="col-sm-9">
                          <div className="form-group">
                            <div className="enter-zip-txt">Enter Zip for City and State</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="payment-method-selection">
                  <fieldset>
                    <div className="form-fields">
                      <div className="row">
                        <div className="col-sm-12">
                          <legend className="label">Store Gift Card</legend>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-4">
                          <div className="form-group">
                            <input name="pin" type="text" id="" className="form-control" placeholder="Pin" />
                          </div>
                        </div>
                        <div className="col-sm-8">
                          <div className="form-group">
                            <div className="enter-zip-txt"><a href="#">Apply</a></div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="smaller">
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
    </div>
    );
  }
}

export default PaymentInfo;