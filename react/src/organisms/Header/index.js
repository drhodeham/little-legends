import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

const props = {
  text: PropTypes.string,
  onClick: PropTypes.func,
}

const Header = ({ text, onClick }) => {
  return (
    <div 
      className="Header"
      onClick={onClick}
    >
      { text }
    </div>
  );
}

Header.propTypes = props;

export default Header;