import React from 'react';
import PropTypes from 'prop-types';
import './app-header.css';

const AppHeader = ({ children }) => <div className="app-header__container">{children}</div>;

AppHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppHeader;
