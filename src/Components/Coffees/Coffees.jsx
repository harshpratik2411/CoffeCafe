import React from 'react';

const coffees = [
  { id: 1, name: 'Espresso', description: 'Strong and bold shot of coffee.', price: '$3.00' },
  { id: 2, name: 'Cappuccino', description: 'Espresso with steamed milk and foam.', price: '$4.00' },
  { id: 3, name: 'Latte', description: 'Espresso with steamed milk and a little foam.', price: '$4.50' },
  { id: 4, name: 'Americano', description: 'Espresso with hot water.', price: '$3.50' },
  { id: 5, name: 'Mocha', description: 'Espresso with steamed milk and chocolate syrup.', price: '$5.00' },
];

const Coffees = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-semibold text-center text-gray-800 mb-8">Our Delicious Coffees</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coffees.map((coffee) => (
            <div
              key={coffee.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{coffee.name}</h2>
                <p className="text-gray-700 mb-4">{coffee.description}</p>
                <span className="text-xl font-semibold text-gray-900">{coffee.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Coffees;
