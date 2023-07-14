import React, { Component } from 'react';
import '../styles/Cv.scss';
import Header from './Header';
import SideSection from './SideSection';
import Work from './Work';
import HeaderForm from './HeaderForm';

class Cv extends Component {
  constructor(props) {
    super(props);

    this.state = {
      header: {
        viewHeaderForm: false,
        firstName: 'Eduardo',
        lastName: 'Alvarado',
        title: 'Junior Web Developer',
        aboutMe: 'this is a test about me section.',
      },
    };

    this.openHeaderForm = this.openHeaderForm.bind(this);
    this.updateHeader = this.updateHeader.bind(this);
  }

  openHeaderForm() {
    this.setState((prevState) => ({
      header: {
        ...prevState.header,
        viewHeaderForm: true,
      },
    }));
  }

  updateHeader(firstName, lastName, title, aboutMe) {
    this.setState({
      header: {
        viewHeaderForm: false,
        firstName: firstName === '' ? 'First Name' : firstName,
        lastName: lastName === '' ? 'Last Name' : lastName,
        title: title.trim() === '' ? 'Title' : title,
        aboutMe: aboutMe.trim() === '' ? 'Write an about me section' : aboutMe,
      },
    });
  }

  render() {
    const { header } = { ...this.state };
    return (
      <div id="cv">
        {header.viewHeaderForm
          ? (
            <HeaderForm
              updateHeader={this.updateHeader}
              firstName={header.firstName}
              lastName={header.lastName}
              title={header.title}
              aboutMe={header.aboutMe}
            />
          )
          : (
            <Header
              openForm={this.openHeaderForm}
              firstName={header.firstName}
              lastName={header.lastName}
              title={header.title}
              aboutMe={header.aboutMe}
            />
          )}
        <SideSection />
        <Work />
      </div>
    );
  }
}

export default Cv;
