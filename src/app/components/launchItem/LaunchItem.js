import React from 'react';
import PropTypes from 'prop-types';
import styles from './LaunchItem.module.scss';

const LaunchItem = (props) => {
  const { missionName, payload } = props.launch;
  const { nationality, manufacturer, type } = payload;

  return (
    <div className={styles.container}>
      <div className={styles.title}>Mission name: {missionName}</div>
      <div>
        <b>Payload information</b>
      </div>
      <div>Nationality: {nationality}</div>
      <div>Manufacturer: {manufacturer}</div>
      <div>Type: {type}</div>
    </div>
  );
};

LaunchItem.propTypes = {
  launch: PropTypes.shape({
    missionName: PropTypes.string.isRequired,
    payload: PropTypes.object,
  }),
};

export default LaunchItem;
