import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import styles from './HistoryListItem.module.scss';

const HistoryListItem = (props) => {
  const { title, description, date, link } = props.historyItem;

  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <Moment format="YYYY-MM-DD HH:mm">{date}</Moment>
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
