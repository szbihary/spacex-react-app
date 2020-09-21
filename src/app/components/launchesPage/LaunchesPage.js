import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import lodash from 'lodash';
import * as actionCreators from '../../redux-saga/actions/actionCreators';
import LaunchItem from '../launchItem/LaunchItem';
import SearchBar from '../searchBar/SearchBar';
import styles from './launchesPage.module.scss';
import Dropdown from '../dropdown/Dropdown';

class LaunchesPage extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <h2>SpaceX Launches</h2>
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
    const list =
      this.props.filteredList.length > 0 ? (
        this.props.filteredList.map((launch) => <LaunchItem key={launch.id} launch={launch} />)
      ) : (
        <div className={styles.noResult}>No results found.</div>
      );
    return (
      <>
        <div className={styles.searchBox}>
          <SearchBar
            type="text"
            labelText="Filter by mission name"
            value={this.props.nameFilterText}
            onChange={(value) => this.props.actions.setNameFilter(value)}
          />
          <SearchBar
            type="date"
            labelText="Filter by mission date from"
            value={this.props.fromDateFilter}
            onChange={(value) => this.props.actions.setFromDateFilter(value)}
          />
          <SearchBar
            type="date"
            labelText="Filter by mission date to"
            value={this.props.toDateFilter}
            onChange={(value) => this.props.actions.setToDateFilter(value)}
          />
          <Dropdown
            labelText="Filter by possible orbits"
            value={this.props.orbitFilter}
            items={this.getUniqueOrbits()}
            onChange={(orbitId) => this.props.actions.setOrbitFilter(orbitId)}
          />
        </div>
        {list}
      </>
    );
  }

  getUniqueOrbits() {
    return lodash.uniqBy(this.props.orbits, 'id').concat({ id: 'all', name: 'All Orbits' });
  }

  componentDidMount() {
    if (this.props.filteredList.length === 0) {
      this.props.actions.loadLaunches();
      this.props.actions.loadRockets();
    }
  }
}

LaunchesPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.string,
  filteredList: PropTypes.array,
  actions: PropTypes.object,
  nameFilterText: PropTypes.string,
  fromDateFilter: PropTypes.string,
  toDateFilter: PropTypes.string,
  orbits: PropTypes.array,
  orbitFilter: PropTypes.string,
};

const mapStateToProps = (state) => {
  const {
    list,
    loading,
    error,
    nameFilterText,
    fromDateFilter,
    toDateFilter,
    orbitFilter,
  } = state.launches;
  const { orbits, loading: isRocketLoading, error: rocketError } = state.orbits;
  let filteredList = list;
  if (nameFilterText) {
    filteredList = filteredList.filter((item) =>
      item.missionName.toLowerCase().includes(nameFilterText.toLowerCase()),
    );
  }
  if (fromDateFilter) {
    filteredList = filteredList.filter((item) => item.missionDate > fromDateFilter);
  }
  if (toDateFilter) {
    filteredList = filteredList.filter((item) => item.missionDate < toDateFilter);
  }
  if (orbitFilter !== 'all') {
    const capableRockets = orbits
      .filter((orbit) => orbit.id === orbitFilter)
      .map((orbit) => orbit.rocket);
    filteredList = filteredList.filter((item) => capableRockets.includes(item.rocketId));
  }
  return {
    filteredList,
    loading,
    error,
    nameFilterText,
    fromDateFilter,
    toDateFilter,
    orbitFilter,
    orbits,
    isRocketLoading,
    rocketError,
  };
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(LaunchesPage);
