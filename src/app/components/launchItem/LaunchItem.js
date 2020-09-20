import React from 'react';
import PropTypes from 'prop-types';
import styles from './launchItem.module.scss';

const LaunchItem = (props) => {
  const { missionName, missionDate, payload } = props.launch;
  const { nationality, manufacturer, type } = payload;
  const date = new Date(missionDate).toLocaleDateString();

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.title}>Mission name: {missionName}</div>
        <div>Mission date: {date}</div>
      </div>
      <div className={styles.right}>
        <div className={styles.title}>Payload information</div>
        <div>Nationality: {nationality}</div>
        <div>Manufacturer: {manufacturer}</div>
        <div>Type: {type}</div>
      </div>
    </div>
  );
};

LaunchItem.propTypes = {
  launch: PropTypes.shape({
    missionName: PropTypes.string.isRequired,
    missionDate: PropTypes.string.isRequired,
    payload: PropTypes.object.isRequired,
  }),
};

export default LaunchItem;
