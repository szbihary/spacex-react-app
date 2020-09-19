import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actionCreators from '../../redux-saga/actions/actionCreators';
import HistoryListItem from '../historyListItem/HistoryListItem';

class HistoryPage extends React.Component {
  render() {
    return (
      <>
        <h2>SpaceX History</h2>
        {this.renderItems()}
      </>
    );
  }

  renderItems() {
    if (this.props.loading) {
      return <h4>Loading...</h4>;
    }
    if (this.props.error) {
      return <div style={{ color: 'red' }}>ERROR: {this.props.error}</div>;
    }
    return this.props.history.map((historyItem, index) => (
      <HistoryListItem key={index} historyItem={historyItem} />
    ));
  }

  async componentDidMount() {
    this.props.actions.loadHistory();
  }
}

HistoryPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.string,
  history: PropTypes.array,
  actions: PropTypes.object,
};

const mapStateToProps = (state) => ({
  history: state.history,
  loading: state.loading,
  error: state.error,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(HistoryPage);
