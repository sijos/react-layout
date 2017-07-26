import React from 'react';

class DeliveryPickup extends React.Component {

  render() {
    return(
      <div className="internal-pad-1">
        <h2><span className="iconnic">1</span> Delivery &amp; Pickup Options <a className="btn btn-secondary edit-button pull-right" id="deliveryOptionsEditButton" href="#" role="button">Edit</a></h2>
        <div id="selectDeliveyOptionsDiv">
          <div className="prod-info">
            <div className="row">
              <div className="col-sm-3 do-resp">
                <div className="image"><img src="images/iphone7-plus-gold-select-2016.jpg" /></div>
              </div>
              <div className="col-sm-9 do-resp">
                <div className="price pull-right">$769.00</div>
                <h3>iPhone 7 Plus 32GB Gold</h3>
                <div className="grad-box">
                  <div className="row">
                    <div className="col-sm-2 resp">Ship:</div>
                    <div className="col-sm-10 resp">
                      <input className="magic-radio" type="radio" name="ship" id="shipradio" value="option"/>
                      <label htmlFor="shipradio">
                        Delivery: In Stock - Free | <a href="#">Get delivery dates</a>
                      </label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-2 resp">Pick up:</div>
                    <div className="col-sm-10 resp">
                      <input className="magic-radio" type="radio" name="pickup" id="pickupradio" value="option" />
                      <label htmlFor="pickupradio">
                        <a href="#">Select a location</a>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="prod-info">
            <div className="row">
              <div className="col-sm-3 do-resp">
                <div className="image"><img src="images/iphone7-silver-select-2016.jpg" /></div>
              </div>
              <div className="col-sm-9 do-resp">
                <div className="price pull-right">$749.00</div>
                <h3>iPhone 7 128GB Silver </h3>
                <div className="grad-box">
                  <div className="row">
                    <div className="col-sm-2 resp">Ship:</div>
                    <div className="col-sm-10 resp">
                      <input className="magic-radio" type="radio" name="ship" id="shipradio" value="option" />
                      <label htmlFor="shipradio">
                      Delivery: In Stock - Free | <a href="#">Get delivery dates</a>
                      </label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-2 resp">Pick up:</div>
                    <div className="col-sm-10 resp">
                      <input className="magic-radio" type="radio" name="pickup" id="pickupradio" value="option" />
                      <label htmlFor="pickupradio">
                      <a href="#">Select a location</a>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DeliveryPickup;