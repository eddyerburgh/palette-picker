// @flow

import React from 'react';
import copy from 'copy-to-clipboard';

type Props = {
  id: string,
  rgb: string,
  lightness: string,
  displayNewModal: Function, // eslint-disable-line react/no-unused-prop-types
  removeSwatch: Function
}

const Swatch = (props: Props): React$Element<any> => {
  function copyToClipboard() {
    try {
      copy(props.rgb);
    } catch (error) {
      props.displayNewModal({
        heading: 'Error',
        message: 'Could not copy to clipboard'
      });
    }
  }
  return (
    <div // eslint-disable-line jsx-a11y/no-static-element-interactions
      onClick={copyToClipboard}
      style={{ backgroundColor: props.rgb }}
      className={`swatch color-${props.lightness}`}
    >
      <button
        className="swatch__remove material-icons"
        onClick={() => props.removeSwatch(props.id)}
      />
    </div>
  );
};

export default Swatch;
