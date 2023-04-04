import React, { useEffect, useRef } from 'react'
import Link from "next/link"
import { IoMenu } from 'react-icons/io5'
import { GiTrumpet } from 'react-icons/gi'
import { IoSunny } from 'react-icons/io5'
import { IoReorderThreeSharp } from 'react-icons/io5'

export default function Nav() {
  const btnRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const btn = btnRef.current;
    const menu = menuRef.current;

    if (btn && menu) {
      btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
      });
    }

    return () => {
      if (btn) {
        btn.removeEventListener('click', () => {
          menu.classList.toggle('hidden');
        });
      }
    };
  }, []);

      return (
        <nav className='font-thin'>
            {/* // Nav */}
            <div className='max-w-7xl mx-auto'>
              <div className='flex justify-between'>
                <div className='flex space-x-4'>
                  <div className='mr-2 py-2 px-4'>
                    <Link href='/'>
                    <GiTrumpet className='text-6xl mx-auto' />
                    <span className='font-bold'>Robbie Collins</span>
                    </Link>
                  </div>
            {/* // Primary */}
                  <div className='hidden md:flex items-center space-x-3'>
                    <Link href='/' className=' py-2 px-4'>Home</Link>
                    <Link href='/bio/' className=' py-2 px-4'>Bio</Link>
                    <Link href="/recordings/" className='py-2 px-4'>Recordings</Link>
                  </div>
                </div>
            {/* // Secondary */}
                <div className='hidden md:flex items-center space-x-3'>
                  
                  <Link href="/teaching/" className=''>Teaching</Link>
                  <Link href="/contact/" className='py-2 px-3 bg-gray-400 text-gray-900 rounded'>Contact</Link>
                </div>
                {/* mobile button */}
                  <div className='md:hidden flex items-center mobile-menu-button'>
                    <button ref={btnRef}>
                      <IoReorderThreeSharp className='text-3xl'/>
                    </button>
                  </div>
                  </div>
            </div>
             {/* // Mobile Menu */}
             <div className='hidden mobile-menu md:hidden' ref={menuRef}>
            <div className='flex flex-col justify-center items-center'>
              <Link href="/" className='block py-4 px-4 text-sm'>Home</Link>
              <Link href="/bio/" className='block py-4 px-4 text-sm'>Bio</Link>    
              <Link href="/recordings/" className='block py-4 px-4 text-sm'>Recordings</Link>
              <Link href="/teaching/" className='block py-4 px-4 text-sm'>Teaching</Link>
              <Link href="/contact/" className='block py-4 px-4 text-sm'>Contact</Link>
            </div>
          </div>
        </nav>

        
      )
}