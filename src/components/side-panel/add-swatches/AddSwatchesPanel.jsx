// @flow

import React from 'react';
import AddSwatchForm from './AddSwatchForm';

type Props = {
  addNewSwatch: Function
}

const AddSwatchesPanel = (props: Props): React$Element<any> => (
  <div>
    <AddSwatchForm addNewSwatch={props.addNewSwatch} />
  </div>
);

export default AddSwatchesPanel;
