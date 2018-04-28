import React from 'react';
import PropTypes from 'prop-types';

const props = {
  text: PropTypes.string,
  onClick: PropTypes.func,
}

const Header = ({ text, onClick }) => {
  return (
    <div 
      className="header"
      onClick={onClick}
    >
      { text }
    </div>
  );
}

Header.propTypes = props;

export default Header;