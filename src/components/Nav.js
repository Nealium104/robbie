import React, { useEffect, useRef } from 'react'
import Link from "next/link"
import { IoMenu } from 'react-icons/io5'
import { GiTrumpet } from 'react-icons/gi'
import { IoSunny } from 'react-icons/io5'

export default function Nav () {
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
            <div>
                <div>
                    <GiTrumpet className='text-6xl'/>
                    <Link href="/">Robbie Collins</Link>
                </div>        
                <Link href="/">Home</Link>
                <Link href="/bio/">Bio</Link>
            </div>
            {/* Secondary Div */}
            <div>
                <Link href="/recordings/">Recordings</Link>
                <Link href="/teaching/">Teaching</Link>
                <Link href="/contact/">Contact</Link>
                <button>
                    <IoSunny />
                </button>
            </div>
        </nav>
    )
    
}

// import React, { useEffect, useRef } from 'react';
// import Link from 'next/link';
// import { BiMusic } from 'react-icons/bi';
// import { BiMenu } from 'react-icons/bi';

// export default function Nav() {
//   const btnRef = useRef(null);
//   const menuRef = useRef(null);

//   useEffect(() => {
//     const btn = btnRef.current;
//     const menu = menuRef.current;

//     if (btn && menu) {
//       btn.addEventListener('click', () => {
//         menu.classList.toggle('hidden');
//       });
//     }

//     return () => {
//       if (btn) {
//         btn.removeEventListener('click', () => {
//           menu.classList.toggle('hidden');
//         });
//       }
//     };
//   }, []);

//     return (
//         <nav className="bg-afWhite">
//             <div className="xl:max-w-6xl mx-auto px-6">
//                 <div className="flex justify-between">
//                     <div className="flex items-center space-x-4">
//                         {/* Logo Here */}
//                         <div className="py-2 px-3">
//                             <a href="#">
//                                 <BiMusic className="mx-auto"/>
//                                 <span className="font-bold">Skunch</span>
//                             </a>
//                         </div>

//                         {/* Primary Div */}
//                         <div className="hidden md:flex items-center space-x-1 ">
//                             <Link href="/" className="py-2 px-3 hover:text-red-900">Home</Link>
//                             <Link href="/about/" className="py-2 px-3 hover:text-red-900">About</Link>
//                         </div>
//                     </div>

//                     {/* Secondary Div */}
//                     <div className="hidden md:flex items-center space-x-1 ">
//                         <Link href='/archive/' className="py-2 px-3">Archive</Link>
//                         <Link href='/merch/' className="py-2 px-3 bg-red-900 rounded hover:bg-red-800">Merch</Link> 
//                     </div>

//                         {/* Mobile Menu Collapse Button */}
//                         <div className="md:hidden flex items-center">
//                             <button className="mobile-menu-button" ref={btnRef}>
//                                 <BiMenu />
//                             </button>
//                         </div>
//                     </div>   
//                         {/* Mobile Menu */}
//                         <div className="flex flex-col items-center mobile-menu hidden md:hidden" ref={menuRef}>
//                             <Link href='/' className="block py-2 px-4 text-sm hover:bg-gray-200 text-center">Home</Link>
//                             <Link href='/about/' className="block py-2 px-4 text-sm hover:bg-gray-200 text-center">About</Link>
//                             <Link href='/archive/' className="block py-2 px-4 text-sm hover:bg-gray-200 text-center">Archive</Link>
//                             <Link href='/merch/' className="block py-2 px-4 text-sm hover:bg-gray-200 text-center">Merch</Link>
//                         </div>
//             </div>

//         </nav>
//     )
// }