// Flow disabled - no support for event.target.querySelector

import React, { Component, PropTypes } from 'react';
import isColor from 'is-color';
import Swatch from '../../../lib/Swatch';

class AddSwatchForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      invalid: false,
      valid: false,
      active: false
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const value = event.target.querySelector('[type="text"]').value;

    if (isColor(value)) {
      this.props.addNewSwatch(new Swatch(value));
      this.setState({ valid: false, invalid: false });
    } else {
      this.setState({ valid: false, invalid: true });
    }
  }

  handleChange = (event) => {
    if (isColor(event.target.value)) {
      this.setState({ valid: true, invalid: false });
    }
  }

  handleBlur = (event) => {
    if (event.target.value === '') {
      this.setState({ active: false, invalid: false, valid: false });
    }
  }

  render() {
    return (
      <form className="add-swatch-form" onSubmit={this.handleSubmit}>
        <div className="input-field">
          <input
            className={(this.state.valid && 'valid') || (this.state.invalid && 'invalid')}
            id="add-swatch"
            type="text"
            onChange={this.handleChange}
            onFocus={() => this.setState({ active: true })}
            onBlur={this.handleBlur}
          />
          <label
            htmlFor="add-swatch"
            data-error="invalid color"
            data-success="valid color"
            className={this.state.active && 'active'}
          >enter color</label>
        </div>
        <input
          type="submit"
          value="add swatch"
          className="btn z-index-1"
        />
      </form>
    );
  }
}

AddSwatchForm.propTypes = {
  addNewSwatch: PropTypes.func
};

export default AddSwatchForm;
