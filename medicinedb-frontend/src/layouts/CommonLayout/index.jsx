import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '~/components/Navbar';

const propTypes = {
  children: PropTypes.element.isRequired,
};

const CommonLayout = ({ children }) => (
  <div>
    <Navbar />
    {children}
  </div>
);

CommonLayout.propTypes = propTypes;
export default CommonLayout;
