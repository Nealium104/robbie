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
        <nav>
            {/* Primary Div */}
            <div className='xl:max-w-6xl mx-auto px-6'>
                <div className='flex justify-between'>
                    <div className='flex items-center space-x-4'>
                        <div className='py-2 px-3'>
                            <Link href='/'>
                            <GiTrumpet className='text-6xl mx-auto font-bold' />
                            Robbie Collins
                            </Link>
                        </div>

                        <div className='hidden md:flex items-center space-x-1'>
                            <Link href="/" className='py-2 px-3'>Home</Link>
                            <Link href="/bio/" className='py-2 px-3'>Bio</Link>
                        </div>        
                    </div>


            {/* Secondary Div */}
            <div>
                <Link href="/recordings/" className='hidden md:flex items-center space-x-1'>Recordings</Link>
                <Link href="/teaching/" className='py-2 px-3'>Teaching</Link>
                <button>
                    <IoSunny />
                </button>
                <Link href="/contact/" className='py-2 px-3 bg-blue-300 rounded hover:bg-blue-400'>Contact</Link>
            </div>

            {/* Mobile Menu Collapse Button */}
            <div className='md:hidden flex items-center'>
                <button className='mobile-menu-button' ref={btnRef}>
                    <IoReorderThreeSharp />
                </button>
            </div>
        </div>
        {/* Mobile Menu */}
        <div className='flex flex-col items-center mobile-menu hidden md:hidden' ref={menuRef}>
        <Link href="/">Home</Link>
        <Link href="/bio/">Bio</Link>    
        <Link href="/recordings/">Recordings</Link>
        <Link href="/teaching/">Teaching</Link>
        <Link href="/contact/">Contact</Link>

        </div>
        </div>
        </nav>
    )
    
}