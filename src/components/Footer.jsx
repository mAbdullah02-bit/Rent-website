import React from 'react';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='text-center  text-white' style={{ backgroundColor: '#1c1c1c' }}>
      <div className='
      '>
        <section className=' '>
          <div className='flex justify-center p-2  '>
           
            <a
              href='#!'
              className='text-white mx-3 my-2'
              style={{ fontSize: '1.5rem', transition: 'transform 0.3s' }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              role='button'
            >
              <FaFacebookF />
            </a>

            <a
              href='#!'
              className='text-white mx-3 my-2'
              style={{ fontSize: '1.5rem', transition: 'transform 0.3s' }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              role='button'
            >
              <FaTwitter />
            </a>

            <a
              href='#!'
              className='text-white mx-3 my-2'
              style={{ fontSize: '1.5rem', transition: 'transform 0.3s' }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              role='button'
            >
              <FaGoogle />
            </a>

            <a
              href='#!'
              className='text-white mx-3 my-2'
              style={{ fontSize: '1.5rem', transition: 'transform 0.3s' }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              role='button'
            >
              <FaInstagram />
            </a>

            <a
              href='#!'
              className='text-white mx-3 my-2'
              style={{ fontSize: '1.5rem', transition: 'transform 0.3s' }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              role='button'
            >
              <FaLinkedin />
            </a>

            <a
              href='#!'
              className='text-white mx-3 my-2'
              style={{ fontSize: '1.5rem', transition: 'transform 0.3s' }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              role='button'
            >
              <FaGithub />
            </a>
          </div>
        </section>

        <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          © 2020 Copyright: CARS DOME
          
        </div>
      </div>
    </footer>
  );
}
