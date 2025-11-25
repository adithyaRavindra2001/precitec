import React from "react"
import { useNavigate } from "react-router-dom"

interface MachineCardProps {
  machine: {
    id: string
    title: string
    description: string
  }
  isActive: boolean
  onClick: () => void
}

export const MachineCard: React.FC<MachineCardProps> = ({ machine, isActive, onClick }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    if (isActive) {
      // If already active, navigate to detail page
      navigate(`/products/${machine.id}`)
    } else {
      // Otherwise, just make it active
      onClick()
    }
  }

  return (
    <div
      onClick={handleClick}
      className={`
        relative flex flex-col justify-center h-56 sm:h-64 p-5 sm:p-8 bg-white rounded-lg sm:rounded-xl cursor-pointer transition-all duration-300 ease-out
        ${isActive
          ? "border-2 border-primary shadow-xl scale-105 z-10"
          : "border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 scale-100 opacity-80 hover:opacity-100"}
      `}
    >
      <h3 className={`text-lg sm:text-xl font-bold mb-2 sm:mb-4 ${isActive ? "text-gray-900" : "text-gray-800"}`}>
        {machine.title}
      </h3>
      <p className="text-gray-500 leading-relaxed text-xs sm:text-sm md:text-base">
        {machine.description}
      </p>

      {/* Decorative active indicator */}
      {isActive && (
        <div className="absolute inset-0 rounded-lg sm:rounded-xl ring-2 sm:ring-4 ring-primary/20 pointer-events-none" />
      )}
    </div>
  )
}
