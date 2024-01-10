import React from 'react';
import Logo from '../../assets/logo.svg'
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className='py-6'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center text-left'>
            <a href='/'>
              <img src={Logo} width={100} height={40} alt="" priority={true} />
            </a>
            <Link
              to='contact'
              activeClass='active'
              smooth={true}
              spy={true}>
                <button className='flex items-center btn btn-sm'>Work With Me</button>
            </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
