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
