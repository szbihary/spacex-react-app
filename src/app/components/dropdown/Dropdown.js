import React from 'react';
import PropTypes from 'prop-types';
import styles from './dropdown.module.scss';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onChange(event.target.value);
  }

  render() {
    const options = this.props.items.map((item) => (
      <option key={item.id} value={item.id}>
        {item.name}
      </option>
    ));
    return (
      <form className={styles.form}>
        <label>
          <div className={styles.label}>{this.props.labelText}:</div>
          <select
            value={this.props.value}
            onChange={this.handleChange}
            className={styles.selectBox}
          >
            {options}
          </select>
        </label>
      </form>
    );
  }
}

Dropdown.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  labelText: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string, name: PropTypes.string })),
};

export default Dropdown;
