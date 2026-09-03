import { motion } from 'framer-motion'
import { PROFILES } from '../data/profiles'
import type { UserKey } from '../types'

interface ProfileSelectProps {
  onSelect: (key: UserKey) => void
}

const ORDER: UserKey[] = ['sina', 'pepe']

export function ProfileSelect({ onSelect }: ProfileSelectProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-10 flex flex-col justify-center gap-3 overflow-y-auto px-5 py-6"
    >
      <div className="mx-auto w-full max-w-[420px]">
        <div className="mb-2 text-center">
          <div className="text-[13px] font-bold uppercase tracking-[0.12em] text-[var(--muted)]">Welcome</div>
          <h1 className="mt-1.5 text-2xl font-extrabold">Who's training today?</h1>
        </div>

        <div className="flex flex-col gap-3">
          {ORDER.map((key, i) => {
            const p = PROFILES[key]
            return (
              <motion.button
                key={key}
                onClick={() => onSelect(key)}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.1, type: 'spring', stiffness: 300, damping: 26 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-3.5 rounded-[18px] border border-[var(--border)] bg-[var(--card)] px-4 py-4 text-left"
              >
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full text-2xl" style={{ background: `${p.accent}26` }}>
                  {p.emoji}
                </span>
                <span className="flex-1">
                  <span className="block text-lg font-bold">{p.name}</span>
                  <span className="block text-xs text-[var(--muted)]">{p.tagline}</span>
                </span>
                <span className="text-[var(--muted)]">›</span>
              </motion.button>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}
