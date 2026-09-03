import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { DayView } from './components/DayView'
import { InfoView } from './components/InfoView'
import { ProfileSelect } from './components/ProfileSelect'
import { RestTimer } from './components/RestTimer'
import { SplashScreen } from './components/SplashScreen'
import { TabBar } from './components/TabBar'
import { PROFILES } from './data/profiles'
import { store } from './lib/store'
import type { DayKey, UserKey } from './types'

const JS_DOW_TO_KEY: DayKey[] = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
const getTodayKey = (): DayKey => JS_DOW_TO_KEY[new Date().getDay()]
const PROFILE_STORE_KEY = 'cal_profile'

type ActiveKey = DayKey | 'info'
type Stage = 'splash' | 'select' | 'app'

function App() {
  const [stage, setStage] = useState<Stage>('splash')
  const [profileKey, setProfileKey] = useState<UserKey | null>(() => store.get(PROFILE_STORE_KEY) as UserKey | null)
  const [todayKey, setTodayKey] = useState<DayKey>(getTodayKey)
  const [activeKey, setActiveKey] = useState<ActiveKey>(getTodayKey)

  const profile = profileKey ? PROFILES[profileKey] : null

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

  useEffect(() => {
    const setAppHeight = () => document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`)
    setAppHeight()
    window.addEventListener('resize', setAppHeight)
    window.addEventListener('orientationchange', setAppHeight)
    window.visualViewport?.addEventListener('resize', setAppHeight)
    return () => {
      window.removeEventListener('resize', setAppHeight)
      window.removeEventListener('orientationchange', setAppHeight)
      window.visualViewport?.removeEventListener('resize', setAppHeight)
    }
  }, [])

  useEffect(() => {
    if (!profile) return
    document.documentElement.style.setProperty('--good', profile.good)
    document.body.dataset.profile = profile.key
  }, [profile])

  const selectProfile = (key: UserKey) => {
    store.set(PROFILE_STORE_KEY, key)
    setProfileKey(key)
    setActiveKey(getTodayKey())
    setStage('app')
  }

  let content: React.ReactNode
  if (stage === 'splash') {
    content = <SplashScreen key="splash" onDone={() => setStage(profileKey ? 'app' : 'select')} />
  } else if (stage === 'select' || !profile) {
    content = <ProfileSelect key="select" onSelect={selectProfile} />
  } else {
    const activeDay = profile.days.find((d) => d.key === activeKey)
    content = (
      <motion.div
        key="app"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
        style={{ paddingBottom: 'calc(var(--tabbar-h) + 20px)' }}
      >
        <header className="mx-auto flex max-w-[520px] items-center justify-between px-3.5 pb-2.5 pt-[calc(18px+env(safe-area-inset-top))]">
          <h1 className="text-[13px] font-bold uppercase tracking-[0.12em] text-[var(--muted)]">{profile.headerTitle}</h1>
          <button
            onClick={() => setStage('select')}
            className="flex flex-shrink-0 items-center gap-1 rounded-full border border-[var(--border)] bg-[var(--card2)] px-2.5 py-1 text-xs font-semibold text-[var(--text)]"
          >
            {profile.emoji} {profile.name}
          </button>
        </header>

        <main className="mx-auto max-w-[520px] px-3.5">
          <AnimatePresence mode="wait">
            {activeKey === 'info' ? (
              <motion.div key="info" initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -12 }} transition={{ duration: 0.18 }}>
                <InfoView profile={profile} />
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
        <TabBar days={profile.days} activeKey={activeKey} todayKey={todayKey} onSelect={(k) => setActiveKey(k as ActiveKey)} />
      </motion.div>
    )
  }

  return <AnimatePresence mode="wait">{content}</AnimatePresence>
}

export default App
