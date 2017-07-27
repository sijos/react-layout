import React from 'react';

class CreateAccount extends React.Component {

  render() {
    return (
      <div>
        <h2 className="subheading" id="createAccountHeading"><span className="iconnic">4</span> Account</h2>
        <div id="createIDSection" style={{display: "none"}}>
          <div className="shipping-contact-form">
            <div className="create-account-id-div">
              <div className="row">
                <div className="col-sm-6">
                  <fieldset>
                    <div className="form-fields">
                        <legend className="label">Create ID (optional)</legend>
                        <p>If you create an Apple ID, we'll save your information for future purchases, and you can return to check your order status. You can also use your account to shop on iTunes, make Apple Retail Reservations, and more.</p>
                    </div>
                  </fieldset>
                </div>
                <div className="col-sm-6">
                  <fieldset>
                    <div className="form-fields">
                      <legend className="label">ID:faraazhameed1990@gmail.com</legend>
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="form-group">
                            <input name="pass" type="password" id="" className="form-control" placeholder="Password" />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="form-group">
                            <input name="confpass" type="password" id="" className="form-control" placeholder="Confirm Password" />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="form-group">
                            <input className="magic-checkbox" type="checkbox" name="updated" id="keppmeupdated" value="option" />
                            <label htmlFor="keppmeupdated">
                            <span className="small">Keep me up to date with news, software updates, and the latest information on products and services from Apple.</span>
                            </label>
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

export default CreateAccount;