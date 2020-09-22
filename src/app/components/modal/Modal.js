import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.getElementById('modal');

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.element = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.appendChild(this.element);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.element);
  }

  render() {
    return createPortal(this.props.children, this.element);
  }
}

Modal.propTypes = {
  children: PropTypes.element,
};

export default Modal;
