import { useEffect, useMemo } from 'react'
import { useDayProgress } from '../hooks/useDayProgress'
import { computeDayStats } from '../lib/program-utils'
import type { DayProgram } from '../types'
import { DayHero } from './DayHero'
import { RestDayView } from './RestDayView'
import { SectionBlock } from './SectionBlock'

export function DayView({ day }: { day: DayProgram }) {
  const { isChecked, toggle, resetDay, version } = useDayProgress(day.key)

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', day.accent)
  }, [day.accent])

  const stats = useMemo(() => computeDayStats(day, isChecked), [day, isChecked, version])

  return (
    <div>
      <DayHero day={day} done={stats.done} total={stats.total} onReset={day.rest ? undefined : resetDay} />
      {day.rest ? (
        <RestDayView day={day} />
      ) : (
        day.sections?.map((section, sIdx) => (
          <SectionBlock key={section.name} section={section} sectionIdx={sIdx} isChecked={isChecked} onToggle={toggle} />
        ))
      )}
    </div>
  )
}
