import { useCallback, useState } from 'react'
import { store, todayStr } from '../lib/store'
import type { DayKey } from '../types'

function keyFor(dayKey: DayKey, sectionIdx: number, rowIdx: number, setIdx: number): string {
  return `cal_${todayStr()}_${dayKey}_${sectionIdx}_${rowIdx}_${setIdx}`
}

export function useDayProgress(dayKey: DayKey) {
  // Bumped on every mutation so consumers recompute derived stats —
  // the source of truth lives in `store`, not React state.
  const [version, setVersion] = useState(0)

  const isChecked = useCallback(
    (sectionIdx: number, rowIdx: number, setIdx: number) => store.get(keyFor(dayKey, sectionIdx, rowIdx, setIdx)) === '1',
    [dayKey],
  )

  const toggle = useCallback(
    (sectionIdx: number, rowIdx: number, setIdx: number) => {
      const k = keyFor(dayKey, sectionIdx, rowIdx, setIdx)
      if (store.get(k) === '1') store.remove(k)
      else store.set(k, '1')
      setVersion((v) => v + 1)
    },
    [dayKey],
  )

  const resetDay = useCallback(() => {
    store.keysWithPrefix(`cal_${todayStr()}_${dayKey}_`).forEach((k) => store.remove(k))
    setVersion((v) => v + 1)
  }, [dayKey])

  return { isChecked, toggle, resetDay, version }
}
