import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <div className="fixed flex w-full">
      <img
        src="/wave.svg"
        className="animate__animated animate__pulse header_wave h-[120px] w-full"
      />
      <Link to="/">
        <img
          className="absolute top-1/2 left-1/2 h-[80px] -translate-x-1/2 -translate-y-1/2"
          src="/logo.svg"
        />
      </Link>
    </div>
  );
};

export default Header;
