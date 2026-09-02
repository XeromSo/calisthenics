import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const PRESETS = [30, 60, 90, 120]

function fmt(t: number): string {
  const m = Math.floor(t / 60).toString().padStart(2, '0')
  const s = Math.floor(t % 60).toString().padStart(2, '0')
  return `${m}:${s}`
}

function beep() {
  try {
    const AudioCtx = window.AudioContext ?? (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
    const ctx = new AudioCtx()
    ;[0, 220, 440].forEach((delay) => {
      setTimeout(() => {
        const osc = ctx.createOscillator()
        const gain = ctx.createGain()
        osc.type = 'sine'
        osc.frequency.value = 880
        gain.gain.value = 0.15
        osc.connect(gain)
        gain.connect(ctx.destination)
        osc.start()
        osc.stop(ctx.currentTime + 0.15)
      }, delay)
    })
  } catch {
    // Web Audio unavailable in this context — silently skip the beep.
  }
  if (navigator.vibrate) navigator.vibrate([200, 100, 200])
}

export function RestTimer() {
  const [open, setOpen] = useState(false)
  const [preset, setPreset] = useState(60)
  const [remaining, setRemaining] = useState(60)
  const [running, setRunning] = useState(false)
  const intervalRef = useRef<number | null>(null)

  useEffect(() => {
    if (!running) return
    intervalRef.current = window.setInterval(() => {
      setRemaining((r) => {
        if (r <= 1) {
          setRunning(false)
          beep()
          return 0
        }
        return r - 1
      })
    }, 1000)
    return () => {
      if (intervalRef.current !== null) window.clearInterval(intervalRef.current)
    }
  }, [running])

  const selectPreset = (p: number) => {
    if (running) return
    setPreset(p)
    setRemaining(p)
  }

  const toggleRun = () => {
    if (running) {
      setRunning(false)
      return
    }
    if (remaining <= 0) setRemaining(preset)
    setRunning(true)
  }

  const reset = () => {
    setRunning(false)
    setRemaining(preset)
  }

  return (
    <>
      <motion.button
        whileTap={{ scale: 0.92 }}
        onClick={() => setOpen((o) => !o)}
        className="fixed right-4 z-[11] flex h-[54px] w-[54px] items-center justify-center rounded-full text-[22px] shadow-[0_8px_20px_rgba(255,106,61,.35)]"
        style={{ bottom: 'calc(var(--tabbar-h) + 12px)', background: 'var(--accent)', color: '#1a0f08' }}
        aria-label="Rest timer"
      >
        ⏱
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 400, damping: 32 }}
            className="fixed inset-x-3.5 z-[12] mx-auto max-w-[492px] rounded-[18px] border border-[var(--border)] bg-[var(--card)] p-4 shadow-[0_20px_40px_rgba(0,0,0,.4)]"
            style={{ bottom: 'calc(var(--tabbar-h) + 12px)' }}
          >
            <div className="mb-2.5 flex items-center justify-between">
              <span className="text-[13px] font-bold text-[var(--muted)]">REST TIMER</span>
              <button onClick={() => setOpen(false)} className="text-lg text-[var(--muted)]" aria-label="Close timer">
                ✕
              </button>
            </div>
            <div className="my-1.5 text-center text-[44px] font-extrabold tracking-wide tabular-nums">{fmt(remaining)}</div>
            <div className="mb-3 flex gap-2">
              {PRESETS.map((p) => (
                <button
                  key={p}
                  onClick={() => selectPreset(p)}
                  className="flex-1 rounded-[10px] border py-2 text-[13px] font-semibold"
                  style={
                    p === preset
                      ? { borderColor: 'var(--accent)', color: 'var(--accent)', background: 'var(--card2)' }
                      : { borderColor: 'var(--border)', background: 'var(--card2)', color: 'var(--text)' }
                  }
                >
                  {p}s
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <button onClick={toggleRun} className="flex-1 rounded-xl py-2.5 text-sm font-bold" style={{ background: 'var(--accent)', color: '#1a0f08' }}>
                {running ? 'Pause' : 'Start'}
              </button>
              <button
                onClick={reset}
                className="flex-1 rounded-xl border py-2.5 text-sm font-bold text-[var(--text)]"
                style={{ borderColor: 'var(--border)', background: 'var(--card2)' }}
              >
                Reset
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
