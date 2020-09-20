import React from 'react';
import PropTypes from 'prop-types';
import styles from './searchBar.module.scss';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onChange(event.target.value);
  }

  render() {
    return (
      <div className={styles.searchBox}>
        <form>
          <label>
            <div className={styles.label}>{this.props.labelText}:</div>
            <input
              type={this.props.type}
              className={styles.inputField}
              value={this.props.value}
              onChange={this.handleChange}
              placeholder="Type a filter"
            />
          </label>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  type: PropTypes.oneOf(['text', 'date']).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  labelText: PropTypes.string,
};

export default SearchBar;
