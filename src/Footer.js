import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons';


class MainFooter extends Component {
  render() {
    return (
      <div className="mainFooter">
              <p>
                Click this button for a quick tour! 
              </p>
              <button type="submit" onClick={this.props.takeTour}>
                      START{' '} <FontAwesomeIcon icon={faAngleDoubleRight} className="tourButton" />
              </button>
      </div>
    );
  }
}

export default MainFooter;
