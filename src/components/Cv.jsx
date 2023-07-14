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
    this.closeHeaderForm = this.closeHeaderForm.bind(this);
  }

  openHeaderForm() {
    this.setState({
      header: {
        viewHeaderForm: true,
      },
    });
  }

  closeHeaderForm() {
    this.setState({
      header: {
        viewHeaderForm: false,
      },
    });
  }

  updateHeader(firstName, lastName, title, aboutMe) {
    this.setState({
      firstName,
      lastName,
      title,
      aboutMe,
    });
  }

  render() {
    const { header } = { ...this.state };
    return (
      <div id="cv">
        {header.viewHeaderForm
          ? <HeaderForm closeForm={this.closeHeaderForm} updateHeader={this.updateHeader} />
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
