import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import ModalMessage from '../components/modal/ModalMessage';

const ModalContainer = props => (
  <ModalMessage modal={props.modal} />
);

const mapStateToProps = state => ({
  modal: state.modal
});

ModalContainer.propTypes = {
  modal: PropTypes.object // eslint-disable-line react/forbid-prop-types
};

export default connect(
    mapStateToProps
)(ModalContainer);
