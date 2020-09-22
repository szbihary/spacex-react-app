import React from 'react';
import PropTypes from 'prop-types';
import styles from './historyListItem.module.scss';

const HistoryListItem = (props) => {
  const { title, description, date, link } = props.historyItem;
  const localeDate = new Date(date).toLocaleDateString();
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div>{localeDate}</div>
      <div>{description}</div>
      {link && (
        <a href={link} rel="noreferrer" target="_blank">
          Read More
        </a>
      )}
    </div>
  );
};

HistoryListItem.propTypes = {
  historyItem: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    link: PropTypes.string,
  }),
};

export default HistoryListItem;
