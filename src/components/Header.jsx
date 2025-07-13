import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, User, Heart } from 'lucide-react';
import { FaPaw } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { state } = useCart();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-around h-16">
          {/* Logo */}
          <div className="logo"><FaPaw /></div>
          <Link to="/" className="flex items-center space-x-2">

            <span className="text-2xl font-bold text-gray-900">PetStore</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/products/dogs" className="text-gray-700 hover:text-blue-600 transition-colors">
              Dogs
            </Link>
            <Link to="/products/cats" className="text-gray-700 hover:text-blue-600 transition-colors">
              Cats
            </Link>
            <Link to="/products/birds" className="text-gray-700 hover:text-blue-600 transition-colors">
              Birds
            </Link>
            <Link to="/products/aquatic" className="text-gray-700 hover:text-blue-600 transition-colors">
              Aquatic
            </Link>
          </nav>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex-1 max-w-lg mx-8">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for pet accessories..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </form>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <Link
              to="/login"
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <User className="h-5 w-5" />
              <span>Login</span>
            </Link>
            <Link
              to="/cart"
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors relative"
            >
              <ShoppingCart className="h-5 w-5" />
              <span>Cart</span>
              {state.items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                  {state.items.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
