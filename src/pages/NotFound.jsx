import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-blue-600">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
          <p className="text-lg text-gray-600 mb-8">
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            <Home className="h-5 w-5" />
            <span>Go Home</span>
          </Link>
          
          <div className="text-gray-500">or</div>
          
          <Link
            to="/search"
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold"
          >
            <Search className="h-5 w-5" />
            <span>Search Products</span>
          </Link>
        </div>

        <div className="mt-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Categories</h3>
          <div className="grid grid-cols-2 gap-4">
            <Link
              to="/products/dogs"
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <span className="text-2xl mb-2 block">🐕</span>
              <span className="font-medium text-gray-900">Dogs</span>
            </Link>
            <Link
              to="/products/cats"
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <span className="text-2xl mb-2 block">🐱</span>
              <span className="font-medium text-gray-900">Cats</span>
            </Link>
            <Link
              to="/products/birds"
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <span className="text-2xl mb-2 block">🐦</span>
              <span className="font-medium text-gray-900">Birds</span>
            </Link>
            <Link
              to="/products/aquatic"
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <span className="text-2xl mb-2 block">🐠</span>
              <span className="font-medium text-gray-900">Aquatic</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
