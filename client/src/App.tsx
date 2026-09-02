import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { DayView } from './components/DayView'
import { InfoView } from './components/InfoView'
import { RestTimer } from './components/RestTimer'
import { TabBar } from './components/TabBar'
import { DAYS } from './data/program'
import type { DayKey } from './types'

const JS_DOW_TO_KEY: DayKey[] = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
const getTodayKey = (): DayKey => JS_DOW_TO_KEY[new Date().getDay()]

type ActiveKey = DayKey | 'info'

function App() {
  const [todayKey, setTodayKey] = useState<DayKey>(getTodayKey)
  const [activeKey, setActiveKey] = useState<ActiveKey>(getTodayKey)
  const activeDay = DAYS.find((d) => d.key === activeKey)

  useEffect(() => {
    const sync = () => setTodayKey(getTodayKey())
    document.addEventListener('visibilitychange', sync)
    window.addEventListener('focus', sync)
    const id = window.setInterval(sync, 60_000)
    return () => {
      document.removeEventListener('visibilitychange', sync)
      window.removeEventListener('focus', sync)
      window.clearInterval(id)
    }
  }, [])

  return (
    <div style={{ paddingBottom: 'calc(var(--tabbar-h) + 20px)' }}>
      <header className="mx-auto max-w-[520px] px-3.5 pb-2.5 pt-[calc(18px+env(safe-area-inset-top))]">
        <h1 className="text-[13px] font-bold uppercase tracking-[0.12em] text-[var(--muted)]">3-Day Calisthenics · Intermediate/Advanced</h1>
      </header>

      <main className="mx-auto max-w-[520px] px-3.5">
        <AnimatePresence mode="wait">
          {activeKey === 'info' ? (
            <motion.div key="info" initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -12 }} transition={{ duration: 0.18 }}>
              <InfoView />
            </motion.div>
          ) : activeDay ? (
            <motion.div
              key={activeDay.key}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.18 }}
            >
              <DayView day={activeDay} />
            </motion.div>
          ) : null}
        </AnimatePresence>
      </main>

      <RestTimer />
      <TabBar days={DAYS} activeKey={activeKey} todayKey={todayKey} onSelect={(k) => setActiveKey(k as ActiveKey)} />
    </div>
  )
}

export default App
