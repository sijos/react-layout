import React from 'react';

class ContinueButton extends React.Component {

  render() {
    const btnId = this.props.btnId;
    const dispType = this.props.hidden ? "none" : "inherit";
    console.log(dispType);
    return(
      <div className="continue-button-section" id={`continueButtonSec${btnId}`} style={{display:`${dispType}`}}>
        <a className="btn btn-primary" href="#" role="button">Continue</a>
      </div>
    );
  }
}

export default ContinueButton;