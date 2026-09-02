import type { DayProgram } from '../types'
import { ProgressBar } from './ProgressBar'

interface DayHeroProps {
  day: DayProgram
  done: number
  total: number
  onReset?: () => void
}

export function DayHero({ day, done, total, onReset }: DayHeroProps) {
  return (
    <div className="relative mt-3.5 overflow-hidden rounded-[20px] border border-[var(--border)] bg-[var(--card)] px-[18px] pb-4 pt-[18px]">
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{ background: 'radial-gradient(220px 140px at 90% -20%, var(--accent) 0%, transparent 70%)' }}
      />
      <div className="relative flex items-start justify-between">
        <div className="text-[34px] leading-none">{day.emoji}</div>
        {onReset && (
          <button
            onClick={onReset}
            className="flex items-center gap-1.5 rounded-[10px] border border-[var(--border)] px-2.5 py-1.5 text-xs text-[var(--muted)] active:bg-[var(--card2)]"
          >
            ↺ Reset
          </button>
        )}
      </div>
      <div className="relative mt-2 text-[22px] font-extrabold" style={{ textWrap: 'balance' }}>
        {day.label} — {day.title}
      </div>
      {day.duration && (
        <div className="relative mt-2.5 flex flex-wrap gap-2.5">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-white/[0.06] px-2.5 py-[3px] text-xs text-[var(--muted)]">
            ⏱ {day.duration}
          </span>
        </div>
      )}
      <div className="relative">
        <ProgressBar done={done} total={total} restDay={!!day.rest} />
      </div>
    </div>
  )
}
