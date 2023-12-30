import React from 'react';

const RentalProperties = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 m-4">
        {Array.from({ length: 6 }, (_, index) => (
          <div key={index} className="card bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
                className="w-full h-38 object-cover"
              />
            </figure>
            <div className="card-body p-2">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RentalProperties;