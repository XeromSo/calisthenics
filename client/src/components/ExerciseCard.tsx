import { motion } from 'framer-motion'
import { parseSetVal } from '../lib/program-utils'
import type { ExerciseRow } from '../types'
import { SetChips } from './SetChips'

interface ExerciseCardProps {
  row: ExerciseRow
  isChecked: (setIdx: number) => boolean
  onToggle: (setIdx: number) => void
}

export function ExerciseCard({ row, isChecked, onToggle }: ExerciseCardProps) {
  const parsed = parseSetVal(row.val)

  if (parsed) {
    const allOn = Array.from({ length: parsed.sets }, (_, i) => isChecked(i)).every(Boolean)
    return (
      <div className="mb-2 rounded-[14px] border border-[var(--border)] bg-[var(--card)] px-3.5 py-3">
        <div className="flex items-center justify-between gap-2.5">
          <div className={`text-[15px] font-semibold ${allOn ? 'text-[var(--muted2)] line-through' : ''}`}>{row.ex}</div>
          <div className="whitespace-nowrap text-[12.5px] text-[var(--muted)]">
            {parsed.sets} × {parsed.rest}
          </div>
        </div>
        <SetChips count={parsed.sets} isChecked={isChecked} onToggle={onToggle} />
      </div>
    )
  }

  const on = isChecked(0)
  return (
    <button onClick={() => onToggle(0)} className="mb-2 block w-full rounded-[14px] border border-[var(--border)] bg-[var(--card)] px-3.5 py-3 text-left">
      <div className="flex items-center gap-3">
        <motion.div
          animate={on ? { scale: [1, 1.2, 1] } : { scale: 1 }}
          transition={{ duration: 0.22 }}
          className="flex h-[26px] w-[26px] flex-shrink-0 items-center justify-center rounded-lg border text-sm"
          style={
            on
              ? { background: 'var(--good)', borderColor: 'var(--good)', color: '#062019' }
              : { borderColor: 'var(--border)', background: 'var(--card2)', color: 'transparent' }
          }
        >
          ✓
        </motion.div>
        <div className={`flex-1 text-[15px] font-semibold ${on ? 'text-[var(--muted2)] line-through' : ''}`}>{row.ex}</div>
        <div className="whitespace-nowrap text-[12.5px] text-[var(--muted)]">{row.val}</div>
      </div>
    </button>
  )
}
