import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/styles';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';

import ConnectionStatus from '/imports/ui/components/ConnectionStatus';
import UserInformation from '/imports/ui/components/UserInformation';

const propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  hasSubmitted: PropTypes.bool.isRequired,
};

const FullShowWaiting = ({ hasSubmitted, classes }) => {
  if (hasSubmitted) {
    return (
      <div className={classes.wrapper}>
        <PlaylistAddCheckIcon className={classes.icon} />
        <span>Ihre Antwort wurde erfolgreich abgegeben.</span>
      </div>
    );
  }

  return (
    <div className={classes.wrapper}>
      <span className={classes.text}>Bitte warten Sie auf die nächste Runde.</span>
      <ConnectionStatus />
      <UserInformation fullShow />
    </div>
  );
};

FullShowWaiting.propTypes = propTypes;

const styles = {
  wrapper: {
    width: '100%',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    fontSize: 24,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  text: {
    marginBottom: 20,
  },
  icon: {
    width: 50,
    height: 50,
    minWidth: 50,
    minHeight: 50,
    marginBottom: 20,
  },
};

export default withStyles(styles)(FullShowWaiting);
