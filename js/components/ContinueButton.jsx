import React from 'react';

class ContinueButton extends React.Component {

  render() {
    const btnId = this.props.btnId;
    const dispType = this.props.hidden ? "none" : "inherit";
    const guest = this.props.btnId === "4" ? " as Guest" : "";
    return(
      <div className="continue-button-section" id={`continueButtonSec${btnId}`} style={{display:`${dispType}`}}>
        <a className="btn btn-primary" href="#" role="button">Continue{guest}</a>
      </div>
    );
  }
}

export default ContinueButton;