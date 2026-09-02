import type { DayProgram } from '../types'

export function RestDayView({ day }: { day: DayProgram }) {
  if (!day.rest) return null
  return (
    <>
      <div className="px-2.5 pb-2.5 pt-[30px] text-center">
        <div className="text-[56px]">💤</div>
        <h2 className="mb-1 mt-2.5 text-xl font-bold">Complete rest.</h2>
        <p className="text-sm text-[var(--muted)]">Let your body recover so tomorrow's training actually counts.</p>
      </div>
      <ul className="mt-4 flex flex-col gap-2">
        {day.rest.optional.map((o) => (
          <li key={o} className="flex items-center gap-2.5 rounded-xl border border-[var(--border)] bg-[var(--card)] px-3.5 py-3 text-sm">
            🙂 {o}
          </li>
        ))}
      </ul>
      <div
        className="mt-3.5 rounded-xl border px-3.5 py-3 text-[13px]"
        style={{ borderColor: 'rgba(255,106,61,.35)', background: 'rgba(255,106,61,.08)', color: '#ffb199' }}
      >
        ⚠️ {day.rest.warning}
      </div>
    </>
  )
}
