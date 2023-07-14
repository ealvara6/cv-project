import React, { Component } from 'react';

class Header extends Component {
  render() {
    const {
      openForm,
      firstName,
      lastName,
      title,
      aboutMe,
    } = { ...this.props };

    return (
      <div id="header" onClick={openForm} onKeyDown={openForm} role="link" tabIndex={0}>
        <div>
          <div className="name">
            <span>
              {firstName}
            </span>
            {lastName}
          </div>
          <div className="title">{title}</div>
        </div>
        <div id="about-me">{aboutMe}</div>
      </div>
    );
  }
}

export default Header;
