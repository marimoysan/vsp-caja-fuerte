import { useState } from 'react'
import './DialPad.css'

const KEYS = [1, 2, 3, 4, 5, 6, 7, 8, 9, '⌫', 0, '✓']

export function DialPad({ team, initialValue = '', onConfirm, onClose }) {
  const [value, setValue] = useState(initialValue)

  function handleKey(key) {
    if (key === '⌫') { setValue(''); return }
    if (key === '✓') { onConfirm(value); return }
    setValue(String(key))
  }

  return (
    <div className="dp-overlay" onClick={onClose}>
      <div
        className="dp-modal"
        onClick={e => e.stopPropagation()}
        style={{ '--tc': team.color }}
      >
        <p className="dp-team">{team.label} Division</p>

        <div className="dp-display">
          {value || <span className="dp-cursor">_</span>}
        </div>

        <div className="dp-grid">
          {KEYS.map((key, i) => (
            <button
              key={i}
              className={`dp-btn ${key === '✓' ? 'dp-confirm' : ''} ${key === '⌫' ? 'dp-delete' : ''}`}
              onClick={() => handleKey(key)}
              disabled={false}
            >
              {key}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
