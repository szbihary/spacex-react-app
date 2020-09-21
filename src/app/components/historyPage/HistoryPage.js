import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actionCreators from '../../redux-saga/actions/actionCreators';
import HistoryListItem from '../historyListItem/HistoryListItem';
import styles from './historyPage.module.scss';

class HistoryPage extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <h2>SpaceX History</h2>
        {this.renderItems()}
      </div>
    );
  }

  renderItems() {
    if (this.props.loading) {
      return <h4>Loading...</h4>;
    }
    if (this.props.error) {
      return <div className={styles.error}>ERROR: {this.props.error}</div>;
    }
    return this.props.list.map((historyItem, index) => (
      <HistoryListItem key={index} historyItem={historyItem} />
    ));
  }

  componentDidMount() {
    if (this.props.list.length === 0) {
      this.props.actions.loadHistory();
    }
  }
}

HistoryPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.string,
  list: PropTypes.array,
  actions: PropTypes.object,
};

const mapStateToProps = (state) => ({
  list: state.history.list,
  loading: state.history.loading,
  error: state.history.error,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(HistoryPage);
