// @flow

import React from 'react';
import OptionsForm from './OptionsForm';

type Props = {
    deleteSwatches: Function
}

const Options = (props: Props): React$Element<any> => (
  <div>
    <h4 className="mt-10">Options</h4>
    <div className="form-group">
      <p>Copy color as</p>
      <OptionsForm />
    </div>
    <div>
      <button
        className="btn btn-primary"
        id="delete-all"
        onClick={props.deleteSwatches}
      >
        <i className="icon icon-delete" /> Delete all
          </button>
    </div>
  </div>
);

export default Options;

