import React, { Component } from 'react';
import '../styles/SideSection.scss';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import SchoolInfo from './SchoolInfo';

class SideSection extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      contact: {
        viewContactForm: false,
        email: 'ealvara73@gmail.com',
        phone: '777-777-7777',
        address: '703 fake ave',
      },
      schools: {
        viewSchoolForm: false,
        schoolArr: [
          {
            dates: '2016 - 2021',
            degree: 'Management Information Systems',
            schoolName: 'University of Houston',
          },
        ],
      },
    });

    this.openContactForm = this.openContactForm.bind(this);
    this.updateContactForm = this.updateContactForm.bind(this);
  }

  openContactForm() {
    this.setState((prevState) => ({
      contact: {
        ...prevState.contact,
        viewContactForm: true,
      },
    }));
  }

  updateContactForm(email, phone, address) {
    this.setState({
      contact: {
        viewContactForm: false,
        email: email === '' ? 'Add your email address here' : email,
        phone: phone === '' ? 'Add your phone number here' : phone,
        address: address === '' ? 'Add your home address here' : address,
      },
    });
  }

  render() {
    const { contact, schools } = { ...this.state };
    return (
      <div id="side-section">
        {contact.viewContactForm
          ? (
            <ContactForm
              email={contact.email}
              phone={contact.phone}
              address={contact.address}
              updateContactForm={this.updateContactForm}
            />
          )
          : (
            <ContactInfo
              email={contact.email}
              phone={contact.phone}
              address={contact.address}
              openContactForm={this.openContactForm}
            />
          )}
        {schools.viewSchoolForm
          ? (
            null
          )
          : (<SchoolInfo schools={schools.schoolArr} />
          )}
      </div>
    );
  }
}

export default SideSection;
