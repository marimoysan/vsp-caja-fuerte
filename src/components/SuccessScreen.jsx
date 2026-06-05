import { useMemo } from 'react'
import './SuccessScreen.css'

const BUBBLE_COUNT = 26

export function SuccessScreen() {
  const bubbles = useMemo(() =>
    Array.from({ length: BUBBLE_COUNT }, (_, i) => ({
      id: i,
      left:     `${(i * 3.9) % 100}%`,
      size:     `${10 + (i * 13) % 30}px`,
      delay:    `${(i * 0.19) % 3}s`,
      duration: `${2.6 + (i * 0.27) % 2.4}s`,
      opacity:  `${0.4 + (i * 0.03) % 0.45}`,
    })),
  [])

  return (
    <div className="success-screen">
      <div className="success-bubbles">
        {bubbles.map(b => (
          <div
            key={b.id}
            className="success-bubble"
            style={{
              left:              b.left,
              width:             b.size,
              height:            b.size,
              animationDelay:    b.delay,
              animationDuration: b.duration,
              opacity:           b.opacity,
            }}
          />
        ))}
      </div>

      <div className="success-content">
        <div className="success-title">CRACKED!</div>
        <div className="success-subtitle">The Greatest Heist in Madrid</div>
      </div>
    </div>
  )
}
