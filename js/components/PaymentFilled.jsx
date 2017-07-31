import React from 'react';

class PaymentFilled extends React.Component {

  render() {
    return(
      <div id="paymentFilledInfo" style={{display: "none"}} >
        <div className="shipping-contact-form">
          <div className="row">
            <div className="col-sm-12">
              <div className="filled-info">
                <fieldset>
                  <div className="form-fields">
                    <legend className="label">Information you entered</legend>
                    <div className="section-padd">
                      <p>
                          Name: &nbsp; John Kim <br /> Company: &nbsp; Microsoft Ltd.<br /> Aread Code: &nbsp; 608<br /> Street Address: &nbsp; 48D ABc Road, NYC, US.<br /> Zip: &nbsp; 22521
                      </p>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PaymentFilled;