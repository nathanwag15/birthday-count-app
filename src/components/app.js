import React, { Component } from 'react';
import BirthdayForm from './birthdayForm';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Birthday</h1>
        <BirthdayForm />
      </div>
    );
  }
}
