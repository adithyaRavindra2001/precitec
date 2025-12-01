import { Link } from "react-router-dom"

interface LogoProps {
  className?: string
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <Link to="/" className={`flex items-center transition-opacity hover:opacity-90 ${className}`}>
      {/* Official Precitec Logo */}
      <img
        src="/precitecLogoTransparent.png"
        alt="Precitec - Precision Engineering"
        className="h-10 sm:h-12 w-auto transition-transform hover:scale-105 duration-300"
      />
    </Link>
  )
}
