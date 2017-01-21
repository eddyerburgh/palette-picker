// Flow disabled - no support for event.target.querySelector

import React, { Component, PropTypes } from 'react';
import isColor from 'is-color';
import Swatch from '../../../lib/Swatch';

class AddSwatchForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      error: false
    };

    // Bind this to handleSubmit in constructor to avoid recreating function on render()
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const value = event.target.querySelector('[type="text"]').value;

    if (isColor(value)) {
      this.props.addNewSwatch(new Swatch(value));
      this.setState({ error: false });
    } else {
      this.setState({ error: true });
    }
  }

  render() {
    return (
      <form className="add-swatch-form" onSubmit={this.handleSubmit}>
        <input type="text" />
        <input
          type="submit"
          value="submit"
        />
        {this.state.error && <span className="color-warning">Invalid color. Must be a valid hex, rgb or CSS color</span>}
      </form>
    );
  }
}

AddSwatchForm.propTypes = {
  addNewSwatch: PropTypes.func
};

export default AddSwatchForm;
