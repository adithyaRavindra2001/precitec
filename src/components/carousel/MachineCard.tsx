import React from "react";
import { useNavigate } from "react-router-dom";

interface MachineCardProps {
  id: string;
  title: string;
  image?: string;
  isActive: boolean;
  onClick: () => void;
}

export const MachineCard: React.FC<MachineCardProps> = ({
  id,
  title,
  image,
  isActive,
  onClick,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (isActive) {
      // Navigate to the category page
      navigate(`/products/category/${id}`);
    } else {
      // Make this card active
      onClick();
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`
        relative flex flex-col overflow-hidden h-64 sm:h-80 bg-white rounded-xl cursor-pointer transition-all duration-500 ease-out group
        ${
          isActive
            ? "ring-2 ring-primary shadow-2xl scale-105 z-10"
            : "ring-1 ring-gray-200 shadow-md hover:shadow-xl hover:ring-gray-300 scale-100 opacity-90 hover:opacity-100"
        }
      `}
    >
      {/* Image Background */}
      <div className="absolute inset-0 bg-gray-100">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-50">
            <span className="text-sm">No Image Available</span>
          </div>
        )}
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-300">
        <h3 className="text-xl sm:text-2xl font-bold mb-2 drop-shadow-md leading-tight">
          {title}
        </h3>

        <div
          className={`
          overflow-hidden transition-all duration-300
          ${isActive ? "max-h-20 opacity-100 mt-2" : "max-h-0 opacity-0"}
        `}
        >
          <span className="inline-flex items-center text-xs sm:text-sm font-medium text-primary-foreground bg-primary/90 px-4 py-1.5 rounded-full backdrop-blur-sm hover:bg-primary transition-colors">
            Explore Category
          </span>
        </div>
      </div>
    </div>
  );
};
