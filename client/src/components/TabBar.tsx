import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import type { DayKey, DayProgram } from '../types'

interface TabBarProps {
  days: DayProgram[]
  activeKey: string
  todayKey: DayKey
  onSelect: (key: string) => void
}

export function TabBar({ days, activeKey, todayKey, onSelect }: TabBarProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const sync = () => document.documentElement.style.setProperty('--tabbar-h', `${el.getBoundingClientRect().height}px`)
    sync()
    const ro = new ResizeObserver(sync)
    ro.observe(el)
    window.addEventListener('orientationchange', sync)
    return () => {
      ro.disconnect()
      window.removeEventListener('orientationchange', sync)
    }
  }, [])

  const tabs: { key: string; short: string; emoji: string; isToday: boolean }[] = [
    ...days.map((d) => ({ key: d.key as string, short: d.short, emoji: d.emoji, isToday: d.key === todayKey })),
    { key: 'info', short: 'Info', emoji: '📋', isToday: false },
  ]

  return (
    <nav
      ref={ref}
      className="fixed inset-x-0 bottom-0 z-10 flex justify-between border-t border-[var(--border)] bg-[#0d1218]/90 backdrop-blur-md"
      style={{ padding: '10px 6px max(10px, env(safe-area-inset-bottom))' }}
    >
      {tabs.map((tab) => {
        const active = activeKey === tab.key
        return (
          <button
            key={tab.key}
            onClick={() => onSelect(tab.key)}
            className={`relative flex flex-1 flex-col items-center gap-[3px] rounded-[10px] px-0.5 py-2 text-[10px] font-semibold transition-colors ${
              active ? 'text-[var(--text)]' : 'text-[var(--muted)]'
            }`}
          >
            {active && (
              <motion.div
                layoutId="tabPill"
                className="absolute inset-0 rounded-[10px] bg-[var(--card2)]"
                transition={{ type: 'spring', stiffness: 500, damping: 35 }}
              />
            )}
            <span className="relative text-[17px] leading-none">{tab.emoji}</span>
            <span className="relative">{tab.short}</span>
            <span
              className="relative mt-px h-1 w-1 rounded-full"
              style={{ background: 'var(--accent)', visibility: tab.isToday ? 'visible' : 'hidden' }}
            />
          </button>
        )
      })}
    </nav>
  )
}
