import type { DayProgram, ParsedSets } from '../types'

export function parseSetVal(val: string): ParsedSets | null {
  const m = val.match(/^(\d+)\s*[×x]\s*(.+)$/i)
  if (!m) return null
  return { sets: parseInt(m[1], 10), rest: m[2] }
}

export function setCountFor(val: string): number {
  return parseSetVal(val)?.sets ?? 1
}

export interface DayStats {
  done: number
  total: number
}

export function computeDayStats(day: DayProgram, isChecked: (sectionIdx: number, rowIdx: number, setIdx: number) => boolean): DayStats {
  if (day.rest || !day.sections) return { done: 0, total: 0 }
  let total = 0
  let done = 0
  day.sections.forEach((section, sIdx) => {
    section.rows.forEach((row, rIdx) => {
      const count = setCountFor(row.val)
      for (let i = 0; i < count; i++) {
        total++
        if (isChecked(sIdx, rIdx, i)) done++
      }
    })
  })
  return { done, total }
}
