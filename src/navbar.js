import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link component

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav class="bg-green-700 p-4 shadow-lg">
      <div class="container mx-auto flex justify-between items-center">
        {/* Logo or Brand Name */}
        <Link to="/" class="text-white text-2xl font-bold">
          MyApp
        </Link>

        {/* Navigation Links */}
        <div class={`hidden md:flex space-x-6 ${isMenuOpen ? 'block' : 'hidden'}`}>
       
        <div className="flex space-x-4">
  <Link 
    to="src/register.js" 
    className="bg-green-900 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg transition duration-300"
  >
    Register
  </Link>
  <Link 
    to="src/dashboard.js" 
    className="bg-green-900 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-green-600 hover:shadow-lg transition duration-300"
  >
    Notes
  </Link>
  
</div>
`



        </div>

        {/* Hamburger Menu (Mobile) */}
        <div class="md:hidden">
          <button
            class="text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div class="md:hidden bg-blue-500 text-white">
    
    <Link 
    to="src/register.js" 
    className="bg-green-900 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg transition duration-300"
  >
    Register
  </Link>
  <Link 
    to="src/dashboard.js" 
    className="bg-green-900 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-green-600 hover:shadow-lg transition duration-300"
  >
    Notes
  </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
