import { Link } from "react-router-dom"

interface LogoProps {
  className?: string
  showText?: boolean
}

export function Logo({ className = "", showText = true }: LogoProps) {
  return (
    <Link to="/" className={`flex items-center gap-3 transition-opacity hover:opacity-80 ${className}`}>
      {/* Logo Icon */}
      <div className="relative">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform hover:rotate-180 duration-700"
        >
          {/* Outer hexagon */}
          <path
            d="M20 2L35 11V29L20 38L5 29V11L20 2Z"
            stroke="currentColor"
            strokeWidth="2"
            className="text-primary"
            fill="none"
          />

          {/* Inner precision cross */}
          <path
            d="M20 12V28M12 20H28"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="text-primary"
          />

          {/* Corner precision marks */}
          <circle cx="20" cy="12" r="1.5" fill="currentColor" className="text-primary" />
          <circle cx="20" cy="28" r="1.5" fill="currentColor" className="text-primary" />
          <circle cx="12" cy="20" r="1.5" fill="currentColor" className="text-primary" />
          <circle cx="28" cy="20" r="1.5" fill="currentColor" className="text-primary" />

          {/* Center precision point */}
          <circle cx="20" cy="20" r="2" fill="currentColor" className="text-primary" />
        </svg>
      </div>

      {/* Logo Text */}
      {showText && (
        <div className="flex flex-col leading-none">
          <span className="text-2xl font-bold tracking-wider text-foreground">
            PRECITEC
          </span>
          <span className="text-[8px] font-semibold tracking-[0.2em] text-primary mt-0.5">
            PRECISION ENGINEERING
          </span>
        </div>
      )}
    </Link>
  )
}
