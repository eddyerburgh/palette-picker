// @flow

import React, { Component } from 'react';
import copy from 'copy-to-clipboard';
import EditSwatch from './EditSwatch';

type Props = {
    displayNewModal: Function,  // eslint-disable-line react/no-unused-prop-types
    removeSwatch: Function, // eslint-disable-line react/no-unused-prop-types
    replaceSwatch: Function,  // eslint-disable-line react/no-unused-prop-types
    displayNewFullScreenMessage: Function,
    moveSwatch: Function, // eslint-disable-line react/no-unused-prop-types
    fontColor: string,
    rgb: string,
    id: string,
    hex: string
}

type ClickEvent = {
    target: {
        className: string
    }
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
  }

  state: State;

  copyToClipboard = (event: ClickEvent) => {
    if (event.target.className.indexOf('swatch__inner') === -1) {
      return;
    }
    try {
      copy(this.props.rgb);

      this.props.displayNewFullScreenMessage(
                'Copied to clipboard!',
                this.props.rgb,
                this.props.fontColor
            );
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
        className="swatch__inner"
        onClick={this.copyToClipboard}
        style={{ backgroundColor: this.props.rgb }}
      >
        <div>
          <button
            className="swatch__edit btn btn-primary btn-action btn-lg float-left"
            onClick={() => this.setState({ displayEdit: !this.state.displayEdit })}
          ><i className="icon icon-edit" /></button>
          <button
            className="swatch__remove btn btn-primary btn-action btn-lg float-right"
            onClick={() => this.props.removeSwatch(this.props.id)}
          ><i className="icon icon-delete" /></button>
        </div>

        {this.state.displayEdit &&
          <EditSwatch
            hex={this.props.hex}
            id={this.props.id}
            replaceSwatch={this.props.replaceSwatch}
          />}
      </div>
    );
  }
}

export default Swatch;
