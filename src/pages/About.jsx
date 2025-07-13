import React from 'react';
import { Heart, Award, Truck, Shield } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6">About PetStore</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're passionate about providing the best accessories and care products for your beloved pets. 
            From dogs and cats to birds and aquatic animals, we have everything you need to keep your 
            companions happy and healthy.
          </p>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: Heart,
              title: 'Pet-First Approach',
              description: 'Every product is chosen with your pet\'s happiness and health in mind.'
            },
            {
              icon: Award,
              title: 'Quality Guarantee',
              description: 'We partner with trusted brands to ensure the highest quality products.'
            },
            {
              icon: Truck,
              title: 'Fast Delivery',
              description: 'Quick and reliable shipping to get products to your pets faster.'
            },
            {
              icon: Shield,
              title: 'Safe & Secure',
              description: 'All products are tested for safety and meet industry standards.'
            }
          ].map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-md text-center">
                <Icon className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            );
          })}
        </div>

        {/* Story Section */}
        <div className="bg-gray-900 rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Our Story</h2>
          <div className="prose prose-invert prose-lg max-w-none text-gray-300">
            <p className="mb-6">
              Founded in 2020 by a team of dedicated pet lovers, PetStore began as a small passion project 
              to make high-quality pet accessories more accessible to pet parents everywhere. What started 
              as a simple idea has grown into a comprehensive platform serving thousands of happy customers 
              and their beloved companions.
            </p>
            <p className="mb-6">
              Our journey started when our founder, struggling to find quality accessories for her rescue dog, 
              realized there was a gap in the market for affordable, high-quality pet products. Today, we're 
              proud to offer an extensive catalog of products for dogs, cats, birds, and aquatic pets.
            </p>
            <p>
              We believe that every pet deserves the best, regardless of their size, breed, or species. 
              That's why we carefully curate our selection to include only products that meet our high 
              standards for quality, safety, and value.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Meet Our Team</h2>
          <p className="text-lg text-gray-300 mb-8">
            Our dedicated team of pet enthusiasts works tirelessly to bring you the best products and service.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Founder & CEO',
                image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
                description: 'Dog lover and entrepreneur with 10+ years in retail.'
              },
              {
                name: 'Mike Chen',
                role: 'Product Manager',
                image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300',
                description: 'Cat enthusiast focused on quality and innovation.'
              },
              {
                name: 'Emma Wilson',
                role: 'Customer Success',
                image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300',
                description: 'Bird lover dedicated to exceptional customer service.'
              }
            ].map((member, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-md">
                <img
                  src={member.image}
                  alt={`Photo of ${member.name}`}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border border-gray-700"
                />
                <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-blue-400 text-sm mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
