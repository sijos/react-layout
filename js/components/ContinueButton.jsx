import React from 'react';

class ContinueButton extends React.Component {

  render() {
    const btnId = this.props.btnId
    return(
      <div className="continue-button-section" id={`continueButtonSec${btnId}`}>
        <a className="btn btn-primary" href="#" role="button">Continue</a>
      </div>
    );
  }
}

export default ContinueButton;