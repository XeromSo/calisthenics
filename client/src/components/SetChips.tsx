import { motion } from 'framer-motion'

interface SetChipsProps {
  count: number
  isChecked: (setIdx: number) => boolean
  onToggle: (setIdx: number) => void
}

export function SetChips({ count, isChecked, onToggle }: SetChipsProps) {
  return (
    <div className="mt-2.5 flex flex-wrap gap-2">
      {Array.from({ length: count }, (_, i) => {
        const on = isChecked(i)
        return (
          <motion.button
            key={i}
            onClick={() => onToggle(i)}
            whileTap={{ scale: 0.88 }}
            animate={on ? { scale: [1, 1.15, 1] } : { scale: 1 }}
            transition={{ duration: 0.22 }}
            className={`flex h-[34px] w-[34px] select-none items-center justify-center rounded-[10px] border text-xs font-bold ${
              on ? 'border-transparent' : 'border-[var(--border)] bg-[var(--card2)] text-[var(--muted)]'
            }`}
            style={on ? { background: 'var(--accent)', color: '#1a0f08' } : undefined}
          >
            {i + 1}
          </motion.button>
        )
      })}
    </div>
  )
}
