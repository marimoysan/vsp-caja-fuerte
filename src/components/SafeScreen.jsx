import logo from '../assets/greatest-heist-mai.jpeg'
import './SafeScreen.css'

export function SafeScreen() {
  return (
    <div className="safe-screen">
      <svg
        className="safe-svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Triangle fills — subtle team color per quadrant */}
        <polygon points="0,0 100,0 50,50"     fill="#00DDB8" fillOpacity="0.10" />
        <polygon points="100,0 100,100 50,50" fill="#1A44E8" fillOpacity="0.10" />
        <polygon points="100,100 0,100 50,50" fill="#00D944" fillOpacity="0.10" />
        <polygon points="0,100 0,0 50,50"     fill="#FFD700" fillOpacity="0.10" />

        {/* Diagonal dividers */}
        <line x1="0"   y1="0"   x2="100" y2="100"
          stroke="rgba(255,255,255,0.15)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        <line x1="100" y1="0"   x2="0"   y2="100"
          stroke="rgba(255,255,255,0.15)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
      </svg>

      <div className="safe-center">
        <img src={logo} alt="The Greatest Heist in Madrid" />
      </div>
    </div>
  )
}
