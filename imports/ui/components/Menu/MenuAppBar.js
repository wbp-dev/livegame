import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Headline from '/imports/ui/components/Headline';
import Button from '/imports/ui/components/Button';

const propTypes = {
  handleClose: PropTypes.func,
};

const AppBar = ({ handleClose }) => {
  const classes = useStyles();
  return (
    <>
      <Box position="sticky" top={0} className={classes.header} boxShadow={2} width={1}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mx={2} height={50}>
          <Headline>Speisen und Getränke</Headline>
          {handleClose && (
            <Button onClick={handleClose} className={classes.closeButton}>
              X
            </Button>
          )}
        </Box>
      </Box>
    </>
  );
};

AppBar.propTypes = propTypes;

const gradient = 'linear-gradient(#00BCD4 0%, #3F51B5 100%)';
const useStyles = makeStyles({
  header: {
    backgroundImage: gradient,
  },
  closeButton: {
    color: '#fff',
    borderRadius: '50%',
    width: 30,
    height: 30,
    backgroundImage: gradient,
    boxShadow: 0,
  },
});

export default AppBar;
