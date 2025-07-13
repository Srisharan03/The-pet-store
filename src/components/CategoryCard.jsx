import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
  return (
    <Link
      to={`/products/${category.id}`}
      className="block bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-all group"
    >
      <div className="aspect-w-16 aspect-h-9 h-48 overflow-hidden">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {category.name}
        </h3>
        <p className="text-gray-600">{category.description}</p>
      </div>
    </Link>
  );
};

export default CategoryCard;
