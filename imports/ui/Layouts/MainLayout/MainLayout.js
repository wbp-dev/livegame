import React from 'react';

import AppBar from 'material-ui/AppBar';
import StarIcon from 'material-ui/svg-icons/action/stars';

import ContentWrapper from '../../components/ContentWrapper';
import Footer from '../../components/Footer';

const layoutStyles = {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

const MainLayout = () => (
  <div style={layoutStyles}>
    <AppBar
      title="LIVESPIEL"
      showMenuIconButton={false}
      titleStyle={{ textAlign: 'center', fontWeight: 300 }}
    />
    <ContentWrapper />
    <Footer />
  </div>
);

export default MainLayout;
