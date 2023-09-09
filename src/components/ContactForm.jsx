/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    const {
      email,
      phone,
      address,
      updateContactForm,
    } = { ...this.props };

    this.state = ({
      email,
      phone,
      address,
      updateContactForm,
    });

    this.updateInput = this.updateInput.bind(this);
  }

  updateInput(e, input) {
    switch (input) {
      case 'email':
        this.setState({ email: e.target.value });
        break;
      case 'phone':
        this.setState({ phone: e.target.value });
        break;
      case 'address':
        this.setState({ address: e.target.value });
        break;
      default:
        throw new Error();
    }
  }

  render() {
    const {
      email,
      phone,
      address,
      updateContactForm,
    } = { ...this.state };
    return (
      <form action="" id="contact-form">
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" value={email} onChange={(e) => this.updateInput(e, 'email')} />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input type="text" name="phone" id="phone" value={phone} onChange={(e) => this.updateInput(e, 'phone')} />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input type="text" name="address" id="address" value={address} onChange={(e) => this.updateInput(e, 'address')} />
        </div>
        <button type="button" onClick={() => updateContactForm(email, phone, address)}>Save</button>
      </form>
    );
  }
}

export default ContactForm;
