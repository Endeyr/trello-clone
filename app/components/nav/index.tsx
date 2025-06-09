import Link from 'next/link';

const Nav = () => {
  return (
    <nav className='border-b border-gray-200 bg-white shadow-sm'>
      <div className='mx-auto max-w-7xl px-6'>
        <div className='flex h-16 items-center justify-between'>
          {/* Logo/Brand */}
          <div className='flex items-center'>
            <Link
              href='/'
              className='flex items-center space-x-2 transition-opacity hover:opacity-80'
            >
              <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600'>
                <svg
                  className='h-5 w-5 text-white'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 002-2M9 7a2 2 0 012 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012-2'
                  />
                </svg>
              </div>
              <span className='text-xl font-bold text-gray-900'>BoardFlow</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className='hidden items-center space-x-8 md:flex'>
            <Link
              href='/dashboard'
              className='font-medium text-gray-700 transition-colors duration-200 hover:text-blue-600'
            >
              Dashboard
            </Link>
            <Link
              href='/boards'
              className='font-medium text-gray-700 transition-colors duration-200 hover:text-blue-600'
            >
              Boards
            </Link>
            <Link
              href='/projects'
              className='font-medium text-gray-700 transition-colors duration-200 hover:text-blue-600'
            >
              Projects
            </Link>
            <Link
              href='/settings'
              className='font-medium text-gray-700 transition-colors duration-200 hover:text-blue-600'
            >
              Settings
            </Link>
          </div>

          {/* Right side - User menu */}
          <div className='flex items-center space-x-4'>
            {/* Notifications */}
            <button className='relative rounded-lg p-2 text-gray-500 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-700'>
              <svg
                className='h-5 w-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z'
                />
              </svg>
              {/* Notification badge */}
              <span className='absolute -top-1 -right-1 h-3 w-3 rounded-full bg-red-500'></span>
            </button>

            {/* User Avatar */}
            <div className='relative'>
              <button className='flex items-center space-x-2 rounded-lg p-2 transition-colors duration-200 hover:bg-gray-100'>
                <div className='flex h-8 w-8 items-center justify-center rounded-full bg-gray-300'>
                  <svg
                    className='h-5 w-5 text-gray-600'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                    />
                  </svg>
                </div>
                <span className='hidden text-sm font-medium text-gray-700 sm:block'>
                  John Doe
                </span>
                <svg
                  className='h-4 w-4 text-gray-500'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M19 9l-7 7-7-7'
                  />
                </svg>
              </button>
            </div>

            {/* Mobile menu button */}
            <button className='rounded-lg p-2 text-gray-500 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-700 md:hidden'>
              <svg
                className='h-6 w-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu (hidden by default) */}
      <div className='border-t border-gray-200 bg-gray-50 md:hidden'>
        <div className='space-y-2 px-6 py-4'>
          <Link
            href='/dashboard'
            className='block rounded-md px-3 py-2 font-medium text-gray-700 transition-colors duration-200 hover:bg-white hover:text-blue-600'
          >
            Dashboard
          </Link>
          <Link
            href='/boards'
            className='block rounded-md px-3 py-2 font-medium text-gray-700 transition-colors duration-200 hover:bg-white hover:text-blue-600'
          >
            Boards
          </Link>
          <Link
            href='/projects'
            className='block rounded-md px-3 py-2 font-medium text-gray-700 transition-colors duration-200 hover:bg-white hover:text-blue-600'
          >
            Projects
          </Link>
          <Link
            href='/settings'
            className='block rounded-md px-3 py-2 font-medium text-gray-700 transition-colors duration-200 hover:bg-white hover:text-blue-600'
          >
            Settings
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
