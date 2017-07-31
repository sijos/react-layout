import React from 'React';

class ShippingAddress extends React.Component {

  render() {
    return(
      <div>
        <h2 className="subheading" id="shippingAddressHeading"><span className="iconnic">2</span> Shipping Address <a className="btn btn-secondary edit-button pull-right" id="shippingAddressEditButton" href="#" role="button">Edit</a></h2>
        <div id="shippingAddressSection" style={{display:"none"}}>
          <div className="shipping-contact-form">
            <div className="row">
              <div className="col-sm-6">
                <div>
                  <fieldset>
                    <div className="form-fields">
                      <div className="row">
                        <div className="col-sm-12">
                          <legend className="label">Shipping Address </legend>
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
                        <div className="col-sm-12">
                          <div className="form-group">
                            <input name="company_name" type="text" id="" className="form-control" placeholder="Company Name (Optional)" />
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
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="form-group">
                            <p>United States</p>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <div className="help-box" id="d_tip1">
                              <a href="#" className="close-tip pull-right">x</a>
                              <p>Lorem ipsum dolor sit amit comset de terelo fdsje. Another recipient email address may be added below </p>
                              <p>Shipment notification emails are sent to the Billing Contact. Another recipient email address may be added below. Shipment notification emails are sent to the Billing Contact. Another recipient email address
                                may be added below.
                              </p>
                            </div>
                            <p><input name="business" type="checkbox" id="" placeholder="" /> This is a business address &nbsp; <a href="#" className="help-tip" id="tip1">?</a></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                  <fieldset>
                    <div className="form-fields">
                      <div className="row">
                        <div className="col-sm-12">
                          <legend className="label">Shipping Notifications</legend>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                            <p>Shipment notification emails are sent to the Billing Contact. Another recipient email address may be added below.</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="form-group">
                            <input name="email" type="text" id="" className="form-control" placeholder="Email Address (optional)" />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          <p>For shipment updates via text messages, enter a mobile number below.</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-3">
                          <div className="form-group">
                            <input name="areacode2" type="text" id="" className="form-control" placeholder="Area Code" />
                          </div>
                        </div>
                        <div className="col-sm-9">
                          <div className="form-group">
                            <input name="mobilephone" type="text" id="" className="form-control" placeholder="Mobile Phone (optional)" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="policy-points">
                  <div className="help-box" id="d_tip2">
                    <a href="#" className="close-tip pull-right">x</a>
                    <p>Shipment notification emails are sent to the Billing Contact. Another recipient email address may be added below. Shipment notification emails are sent to the Billing Contact. Another recipient email address may be added
                        below.
                    </p>
                    <p>Shipment notification emails are sent to the Billing Contact. Another recipient email address may be added below. Shipment notification emails are sent to the Billing Contact. Another recipient email address may be added
                        below.
                    </p>
                  </div>
                  <h4>Shipping Policy <span>&nbsp;|&nbsp;</span> <a href="#">Learn more</a> &nbsp; <a href="#" className="help-tip" id="tip2">?</a></h4>
                  <ul>
                    <li>Signature may be required for delivery</li>
                    <li>We do not ship to P.O. boxes</li>
                    <li>Delivery estimates below include item preparation and shipping time</li>
                    <li>Military &amp; Foreign Service <a href="#">shipping to APO/FPO/DPO</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
    );
  }
}

export default ShippingAddress;