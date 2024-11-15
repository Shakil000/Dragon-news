import React from "react";
import { FaEye, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCart = ({ allNewses }) => {
    return (
        <div className="border rounded-lg shadow-md p-4 mb-4">
          {/* Author Section */}
          <div className="flex items-center mb-3">
            <img
              src={allNewses.author.img} 
              alt={allNewses.author.name} 
              className="w-10 h-10 rounded-full mr-3" 
            />
            <div>
              <p className="font-semibold">{allNewses.author.name}</p>
              <p className="text-gray-500 text-sm">{new Date(allNewses.author.published_date).toLocaleDateString()}</p>
            </div>
            <div className="ml-auto">
              <button className="text-gray-500 hover:text-gray-700">
                <i className="fas fa-share-alt"></i>
              </button>
            </div>
          </div>
    
          {/* Title */}
          <h2 className="font-bold text-lg mb-3">{allNewses.title}</h2>
    
          {/* Image */}
          <img 
            src={allNewses.image_url} 
            alt={allNewses.title} 
            className="w-full h-full object-cover rounded-md mb-3"
          />
    
          {/* Details Dynamically handle details using id*/}
          <Link to={`/news/${allNewses._id}`} className="text-gray-700 mb-3">{allNewses.details.substring(0, 200)}... <span className="text-blue-600 cursor-pointer">Read More</span></Link>
    
          {/* Footer Section */}
          <div className="flex items-center justify-between">
            {/* Rating */}
            <div className="flex items-center text-yellow-500">
          {[...Array(Math.floor(allNewses.rating.number))].map((_, i) => (
            <FaStar key={i} />
          ))}
          {allNewses.rating.number % 1 !== 0 && <FaStarHalfAlt />}
          <span className="ml-2 text-gray-600">{allNewses.rating.number}</span>
        </div>
    
            {/* Views */}
            <div className="flex items-center text-gray-600">
          <FaEye className="mr-1" />
          {allNewses.total_view}
        </div>
          </div>
        </div>
      );
    };

export default NewsCart;
