interface ProgressBarProps {
  done: number
  total: number
  restDay?: boolean
}

export function ProgressBar({ done, total, restDay }: ProgressBarProps) {
  const pct = restDay ? 100 : total ? Math.round((done / total) * 100) : 0
  const complete = !restDay && total > 0 && done === total

  return (
    <div className="mt-3.5">
      <div className="h-2 overflow-hidden rounded-full bg-white/[0.08]">
        <div
          className="h-full rounded-full transition-[width] duration-300 ease-out"
          style={{ width: `${pct}%`, background: complete ? 'var(--good)' : 'var(--accent)' }}
        />
      </div>
      <div className="mt-1.5 text-right text-[11px] text-[var(--muted)]">
        {restDay ? 'Rest day — nothing to track' : complete ? '✓ Workout complete' : `${done}/${total} sets complete`}
      </div>
    </div>
  )
}
