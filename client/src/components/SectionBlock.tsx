import type { Section } from '../types'
import { ExerciseCard } from './ExerciseCard'

interface SectionBlockProps {
  section: Section
  sectionIdx: number
  isChecked: (sectionIdx: number, rowIdx: number, setIdx: number) => boolean
  onToggle: (sectionIdx: number, rowIdx: number, setIdx: number) => void
}

export function SectionBlock({ section, sectionIdx, isChecked, onToggle }: SectionBlockProps) {
  return (
    <div className="mt-[18px]">
      <div className="mb-2 flex items-center gap-2 text-sm font-bold" style={{ color: 'var(--accent)' }}>
        <span>{section.name}</span>
        <span className="h-px flex-1" style={{ background: 'var(--border)' }} />
      </div>
      {section.rows.map((row, rIdx) => (
        <ExerciseCard
          key={row.ex}
          row={row}
          isChecked={(setIdx) => isChecked(sectionIdx, rIdx, setIdx)}
          onToggle={(setIdx) => onToggle(sectionIdx, rIdx, setIdx)}
        />
      ))}
      {section.notes && (
        <ul className="mt-1.5 list-disc space-y-1 py-2.5 pl-[18px] pr-20 text-[13px] leading-relaxed text-[var(--muted)]">
          {section.notes.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
