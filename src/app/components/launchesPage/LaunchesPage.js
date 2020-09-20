import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actionCreators from '../../redux-saga/actions/actionCreators';
import LaunchItem from '../launchItem/LaunchItem';

class LaunchesPage extends React.Component {
  render() {
    return (
      <>
        <h2>SpaceX Launches</h2>
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
    const list = this.props.list.map((launch) => <LaunchItem key={launch.id} launch={launch} />);
    return <div>{list}</div>;
  }

  async componentDidMount() {
    if (this.props.list.length === 0) {
      this.props.actions.loadLaunches();
    }
  }
}

LaunchesPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.string,
  list: PropTypes.array,
  actions: PropTypes.object,
};

const mapStateToProps = (state) => ({
  list: state.launches.list,
  loading: state.launches.loading,
  error: state.launches.error,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(LaunchesPage);
