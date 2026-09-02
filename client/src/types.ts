export type DayKey = 'sat' | 'sun' | 'mon' | 'tue' | 'wed' | 'thu' | 'fri'

export interface ExerciseRow {
  ex: string
  val: string
}

export interface Section {
  name: string
  rows: ExerciseRow[]
  notes?: string[]
}

export interface RestDayInfo {
  optional: string[]
  warning: string
}

export interface DayProgram {
  key: DayKey
  short: string
  label: string
  emoji: string
  title: string
  accent: string
  duration?: string
  sections?: Section[]
  rest?: RestDayInfo
}

export interface ParsedSets {
  sets: number
  rest: string
}

export type UserKey = 'sina' | 'pepe'

export interface SkillProgression {
  name: string
  steps: string[]
}

export interface InfoContent {
  focusTag: string
  skillProgressions: SkillProgression[]
  importantRules: string[]
  progressionRule: string
  closingQuote: string
  closingQuoteDir?: 'rtl' | 'ltr'
}

export interface Profile {
  key: UserKey
  name: string
  emoji: string
  tagline: string
  accent: string
  good: string
  headerTitle: string
  days: DayProgram[]
  info: InfoContent
}
