
import React from 'react';
import card1 from '../../assets/Card/card1.jpg';
import card2 from '../../assets/Card/card2.jpg';
import card3 from '../../assets/Card/card3.jpg';
import card4 from '../../assets/Card/card4.jpg';
import { FaStar } from 'react-icons/fa';

const ProductsData = [
    {
        id: 1,
        img: card1,  // Correct image import
        title: "Espresso Blend",
        rating: 5.0,
        color: "white",
        aosDelay: "0"
    }, 

    {
        id: 2,
        img: card2,  // Correct image import
        title: "Cappuccino Delight",
        rating: 5.0,
        color: "red",
        aosDelay: "200"
    },
    {
        id: 3,
        img: card3,  // Correct image import
        title: "Latte Supreme",
        rating: 4.0,
        color: "brown",
        aosDelay: "400"
    }, 
    {
      id: 2,
      img: card2,  // Correct image import
      title: "Cappuccino Delight",
      rating: 5.0,
      color: "red",
      aosDelay: "200"
  },
    { 
        id: 4,
        img: card3,  // Correct image import
        title: "Americano Classic",
        rating: 4.0,
        color: "brown",
        aosDelay: "400"
    },
    {
        id: 5,
        img: card4,  // Correct image import
        title: "Mocha Fantasy",
        rating: 4.4,
        color: "yellow",
        aosDelay: "600"
    }, 
    
    {
        id: 6,
        img: card4,  // Correct image import
        title: "Macchiato Dream",
        rating: 4.4,
        color: "yellow",
        aosDelay: "600"
    }, 
    {
      id: 1,
      img: card1,  // Correct image import
      title: "Espresso Blend",
      rating: 5.0,
      color: "white",
      aosDelay: "0"
  }, 
    {
      id: 4,
      img: card3,  // Correct image import
      title: "Americano Classic",
      rating: 4.0,
      color: "brown",
      aosDelay: "400"
  }, 
  {
      id: 6,
      img: card4,  // Correct image import
      title: "Macchiato Dream",
      rating: 4.4,
      color: "yellow",
      aosDelay: "600"
  }, 
    
];

const Services = () => {
    return (
        <div className='mt-14 mb-12'>
            {/* Header section */}
            <div  className='text-center mb-10 max-w-[600px] mx-auto'>
                <p data-aos="fade-up" className='text-sm text-primary'>Most Demanding Coffees</p>
                <h1  data-aos="fade-up"className='text-3xl font-bold'>Coffees</h1>
                <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, molestiae.</p>
            </div>

            {/* Body section */}
            <div>
                <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'> 
                    {/* Card section */}
                    {ProductsData.map((data) => (
                        <div key={data.id} data-aos="fade-up" data-aos-delay={data.aosDelay}>
                            <div className="relative cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-110 drop-shadow-md">
                                <img 
                                    src={data.img} 
                                    alt={data.title} 
                                    className='h-[290px] w-[240px] object-cover rounded-md' 
                                />
                                <div className="absolute top-0 left-0 right-0 bg-black bg-opacity-40 text-white p-2 text-center rounded-md"/> 
                                <h3 className="font-bold">{data.title}</h3>
                                <p className='text-sm text-gray-600'>{data.color}</p> 
                                <div className="flex justify-center mt-2">
                                    <FaStar className="text-yellow-500" />
                                    <FaStar className="text-yellow-500" />
                                    <FaStar className="text-yellow-500" />
                                    <FaStar className="text-yellow-500" />
                                    <FaStar className="text-gray-300" />
                                </div>
                                <div className="flex justify-center items-center gap-1">
                                    <span>{data.rating}</span>
                                </div>
                            </div>
                        </div>
                    ))} 
                </div>
                
                {/* View all product button */}
                <div className='flex justify-center'>
                    <button className='mt-10 bg-primary cursor-pointer text-white py-2 px-2 rounded-md'>
                        View all Button
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Services;
