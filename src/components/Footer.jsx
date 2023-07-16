import React, { Component } from 'react';
import logo from '../icons/github-logo.svg';

class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <div id="footer-content">
          <div id="copyright">Copyright &copy; 2023</div>
          <div id="username">Ealvara6</div>
          <a href="https://github.com/ealvara6" target="_blank" rel="noreferrer">
            <img src={logo} alt="github logo" id="github-logo" target="_blank" />
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
