// @flow

import React from 'react';

type Props = {
    deleteSwatches: Function
}

const Options = (props: Props): React$Element<any> => (
  <div>
    <h4 className="mt-10">Options</h4>
    <button
      className="btn btn-primary btn-block"
      id="delete-all"
      onClick={props.deleteSwatches}
    >
      <i className="icon icon-delete" /> Delete all
        </button>
  </div>
);

export default Options;

