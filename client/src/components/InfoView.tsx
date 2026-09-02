import { useEffect } from 'react'
import type { Profile } from '../types'

export function InfoView({ profile }: { profile: Profile }) {
  useEffect(() => {
    document.documentElement.style.setProperty('--accent', profile.accent)
  }, [profile.accent])

  return (
    <div>
      <div className="relative mt-3.5 overflow-hidden rounded-[20px] border border-[var(--border)] bg-[var(--card)] px-[18px] pb-4 pt-[18px]">
        <div className="text-[34px] leading-none">📋</div>
        <div className="mt-2 text-[22px] font-extrabold">Overview & Progressions</div>
        <div className="mt-2.5">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-white/[0.06] px-2.5 py-[3px] text-xs text-[var(--muted)]">
            {profile.info.focusTag}
          </span>
        </div>
      </div>

      <div className="mt-3.5 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4">
        <h3 className="mb-2.5 text-[15px] font-bold" style={{ color: 'var(--accent)' }}>
          Weekly Schedule
        </h3>
        <div className="flex flex-col gap-1.5">
          {profile.days.map((d) => (
            <div key={d.key} className="flex items-center justify-between rounded-[10px] bg-[var(--card2)] px-3 py-2.5 text-[13.5px]">
              <span className="w-20 flex-shrink-0 text-[var(--muted)]">{d.label}</span>
              <span>
                {d.emoji} {d.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      {profile.info.skillProgressions.length > 0 && (
        <div className="mt-3.5 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4">
          <h3 className="mb-2.5 text-[15px] font-bold" style={{ color: 'var(--accent)' }}>
            Skill Progressions
          </h3>
          {profile.info.skillProgressions.map((p) => (
            <div key={p.name} className="mt-3.5 first:mt-0">
              <div className="text-[13px] font-bold text-[var(--muted)]">{p.name}</div>
              <div className="mt-2 flex flex-wrap items-center gap-1.5 text-[13px]">
                {p.steps.map((s, i) => (
                  <span key={s} className="flex items-center gap-1.5">
                    <span className="rounded-full border border-[var(--border)] bg-[var(--card2)] px-2.5 py-1.5">{s}</span>
                    {i < p.steps.length - 1 && <span className="text-[var(--muted2)]">→</span>}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-3.5 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4">
        <h3 className="mb-2.5 text-[15px] font-bold" style={{ color: 'var(--accent)' }}>
          Progression Rule
        </h3>
        <p className="text-[13px] leading-relaxed text-[var(--muted)]">{profile.info.progressionRule}</p>
        <div className="mt-2.5 text-[13px] font-bold text-[var(--muted)]">Important</div>
        <ul className="list-disc space-y-1.5 pl-[18px] text-[13.5px] leading-relaxed text-[var(--muted)]">
          {profile.info.importantRules.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
        <div
          dir={profile.info.closingQuoteDir ?? 'ltr'}
          className="mt-3.5 rounded-r-xl border-l-[3px] bg-[var(--card2)] px-4 py-3.5 text-[13.5px] italic text-[#c9d3dd]"
          style={{ borderColor: 'var(--accent)' }}
        >
          "{profile.info.closingQuote}"
        </div>
      </div>
    </div>
  )
}
