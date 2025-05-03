'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Cta from '../../Cta/Cta';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const publicNavItems = [
  { text: 'Home', path: '/' },
  { text: 'Projects', path: '#projects' },
  { text: 'Blogs', path: '/dashboard/blogs' },
  { text: 'Contact', path: '/contact' },
  { text: 'About', path: '#about' },
  { text: 'Dashboard', path: '/dashboard/blogs' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  // Close sidebar only if clicking outside, not on menu links
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const sidebar = document.querySelector('.mobile-sidebar');
      const menuButton = document.querySelector('.menu-button');

      if (
        isOpen &&
        sidebar &&
        !sidebar.contains(e.target as Node) &&
        !menuButton?.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Function to handle menu clicks (closes sidebar after navigation)
  const handleMenuClick = () => setIsOpen(false);

  return (
    <nav className="max-w-screen-xl px-3 xl:px-0 mx-auto border-b-[1.5px] border-backgroundLight py-3 relative">
      <div className="flex items-center justify-between px-4 sm:px-2 md:px-0 flex-wrap space-y-2">
        <Link href="/">
          <h1 className="text-xl sm:text-2xl font-semibold">Md Rezaul</h1>
        </Link>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="menu-button">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        <ul className="hidden md:flex justify-between items-center md:gap-x-10 sm:text-lg w-full lg:w-auto">
          {publicNavItems.map((item, index) => (
            <li
              key={index}
              className={`block hover:text-textGreen transition duration-300 ${
                item.path === pathName ? 'text-textGreen' : 'text-textGray'
              }`}
            >
              <Link href={item.path}>{item.text}</Link>
            </li>
          ))}
          <Cta href="/doc/Md Rezaul Karim.pdf" target="blank" text="View CV" />
        </ul>
      </div>

      {/* Mobile Sidebar */}
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? 0 : '-100%' }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 h-full w-64 bg-backgroundLight shadow-lg p-5 md:hidden z-50 mobile-sidebar"
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4"
        >
          <X size={28} />
        </button>
        <ul className="mt-10 space-y-6 text-lg text-textDark">
          {
            <div className="text-textGray space-y-7 mb-7">
              {publicNavItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.path}
                    className="hover:text-textGreen transition duration-300"
                    onClick={handleMenuClick}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </div>
          }
          <Cta
            href="/doc/cv.pdf"
            download="Md.Rezaul Karim.pdf"
            text="Download CV"
          />
        </ul>
      </motion.div>
    </nav>
  );
}

export default Navbar;
