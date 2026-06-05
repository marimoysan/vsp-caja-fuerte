import { useState } from 'react'
import logo from '../assets/greatest-heist-mai.jpeg'
import { DialPad } from './DialPad'
import { SuccessScreen } from './SuccessScreen'
import './SafeScreen.css'

const TEAMS = {
  top:    { color: '#00DDB8', label: 'Turquesa' },
  right:  { color: '#1A44E8', label: 'Azul' },
  bottom: { color: '#00D944', label: 'Verde' },
  left:   { color: '#FFD700', label: 'Amarillo' },
}

const DIGIT_POS = {
  top:    { top: '22%', left: '50%' },
  right:  { top: '50%', left: '78%' },
  bottom: { top: '78%', left: '50%' },
  left:   { top: '50%', left: '22%' },
}

const CORRECT = { top: '7', right: '6', left: '3', bottom: '2' }

export function SafeScreen() {
  const [digits, setDigits] = useState({ top: null, right: null, bottom: null, left: null })
  const [active, setActive]   = useState(null)
  const [solved, setSolved]   = useState(false)
  const [error,  setError]    = useState(false)

  const allFilled = Object.values(digits).every(d => d !== null)

  function handleConfirm(digit) {
    setDigits(prev => ({ ...prev, [active]: digit }))
    setActive(null)
  }

  function handleCenterClick() {
    if (!allFilled) return
    const correct = Object.keys(CORRECT).every(k => digits[k] === CORRECT[k])
    if (correct) {
      setSolved(true)
    } else {
      setError(true)
      setTimeout(() => {
        setError(false)
        setDigits({ top: null, right: null, bottom: null, left: null })
      }, 700)
    }
  }

  if (solved) return <SuccessScreen />

  return (
    <div className="safe-screen">
      {error && <div className="safe-error-flash" />}

      <svg
        className="safe-svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon
          points="0,0 100,0 50,50"
          fill="#00DDB8" fillOpacity={digits.top    !== null ? '0.22' : '0.10'}
          onClick={() => setActive('top')}
          style={{ cursor: 'pointer' }}
        />
        <polygon
          points="100,0 100,100 50,50"
          fill="#1A44E8" fillOpacity={digits.right  !== null ? '0.22' : '0.10'}
          onClick={() => setActive('right')}
          style={{ cursor: 'pointer' }}
        />
        <polygon
          points="100,100 0,100 50,50"
          fill="#00D944" fillOpacity={digits.bottom !== null ? '0.22' : '0.10'}
          onClick={() => setActive('bottom')}
          style={{ cursor: 'pointer' }}
        />
        <polygon
          points="0,100 0,0 50,50"
          fill="#FFD700" fillOpacity={digits.left   !== null ? '0.22' : '0.10'}
          onClick={() => setActive('left')}
          style={{ cursor: 'pointer' }}
        />

        <line x1="0"   y1="0"   x2="100" y2="100"
          stroke="rgba(255,255,255,0.15)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        <line x1="100" y1="0"   x2="0"   y2="100"
          stroke="rgba(255,255,255,0.15)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
      </svg>

      {Object.entries(digits).map(([quadrant, digit]) =>
        digit !== null && (
          <div
            key={quadrant}
            className="safe-digit"
            style={{ ...DIGIT_POS[quadrant], color: TEAMS[quadrant].color }}
          >
            {digit}
          </div>
        )
      )}

      <div
        className={`safe-center ${allFilled ? 'ready' : ''}`}
        onClick={handleCenterClick}
      >
        <img src={logo} alt="The Greatest Heist in Madrid" />
      </div>

      {active && (
        <DialPad
          team={TEAMS[active]}
          initialValue={digits[active] ?? ''}
          onConfirm={handleConfirm}
          onClose={() => setActive(null)}
        />
      )}
    </div>
  )
}
