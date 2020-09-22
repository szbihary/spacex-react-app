import React from 'react';
import PropTypes from 'prop-types';
import styles from './launchItem.module.scss';
import Modal from '../modal/Modal';

const renderVideo = (videoSource) => {
  if (!videoSource) {
    return null;
  }
  return (
    <div className={styles.video}>
      <iframe
        src={videoSource}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="video"
        width="640"
        height="360"
        className={styles.video}
      />
    </div>
  );
};

export default class LaunchItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    };
  }

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };

  renderModal() {
    const { showModal } = this.state;
    const { missionName, rocketName, site, details, video } = this.props.launch;
    if (!showModal) {
      return null;
    }
    return (
      <Modal>
        <div className={styles.modal}>
          <h2>{missionName}</h2>
          <div className={styles.modalContent}>
            <div>
              <span className={styles.title}>Rocket: </span>
              {rocketName}
            </div>
            <div>
              <span className={styles.title}>Site: </span>
              {site}
            </div>
            <div>
              <span className={styles.title}>Details: </span>
              {details}
            </div>
            <div className={styles.content}>{renderVideo(video)}</div>
          </div>
          <button className={styles.modalClose} onClick={this.toggleModal}>
            x
          </button>
        </div>
      </Modal>
    );
  }

  render() {
    const { missionName, missionDate, patch, payload } = this.props.launch;
    const { nationality, manufacturer, type } = payload;
    const date = new Date(missionDate).toLocaleDateString();

    return (
      <>
        <div className={styles.container} onClick={this.toggleModal}>
          <div className={styles.left}>
            {patch ? (
              <img className={styles.patch} src={patch} alt={missionName} />
            ) : (
              'No patch found.'
            )}
          </div>
          <div className={styles.center}>
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
        {this.renderModal()}
      </>
    );
  }
}

LaunchItem.propTypes = {
  launch: PropTypes.shape({
    id: PropTypes.number.isRequired,
    missionName: PropTypes.string.isRequired,
    missionDate: PropTypes.string.isRequired,
    patch: PropTypes.string,
    video: PropTypes.string,
    site: PropTypes.string,
    details: PropTypes.string,
    rocketName: PropTypes.string,
    payload: PropTypes.object.isRequired,
  }),
  onClick: PropTypes.func,
};
