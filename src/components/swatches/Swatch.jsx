// @flow

import React, { Component } from 'react';
import copy from 'copy-to-clipboard';
import EditSwatch from './EditSwatch';

type Props = {
  id: string,
  rgb: string,
  lightness: string,
  displayNewModal: Function, // eslint-disable-line react/no-unused-prop-types
  replaceSwatch: Function,
  removeSwatch: Function
}
type State = {
  displayEdit: boolean
}

class Swatch extends Component {


  constructor(props: Props) {
    super(props);

    this.state = {
      displayEdit: false
    };

    // Bind this to copyToClipboard in constructor to avoid recreating function on render()
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
    (this:any).copyToClipboard = this.copyToClipboard.bind(this);
  }

  state: State;

  copyToClipboard() {
    try {
      copy(this.props.rgb);
    } catch (error) {
      this.props.displayNewModal({
        heading: 'Error',
        message: 'Could not copy to clipboard'
      });
    }
  }

  render() {
    return (
      <div // eslint-disable-line jsx-a11y/no-static-element-interactions
        onClick={this.copyToClipboard}
        style={{ backgroundColor: this.props.rgb }}
        className={`swatch color-${this.props.lightness}`}
      >
        <button
          className="swatch__remove material-icons"
          onClick={() => this.props.removeSwatch(this.props.id)}
        />
        <button
          className="swatch__edit material-icons"
          onClick={() => this.setState({ displayEdit: true })}
        />
        {this.state.displayEdit &&
          <EditSwatch
            id={this.props.id}
            replaceSwatch={this.props.replaceSwatch}
          />}
      </div>
    );
  }
}

export default Swatch;
