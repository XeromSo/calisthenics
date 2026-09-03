import type { Profile, UserKey } from '../types'
import {
  PEPE_CLOSING_QUOTE,
  PEPE_DAYS,
  PEPE_IMPORTANT_RULES,
  PEPE_PROGRESSION_RULE,
  PEPE_SKILL_PROGRESSIONS,
} from './pepe-program'
import { CLOSING_QUOTE, IMPORTANT_RULES, PROGRESSION_RULE, SINA_DAYS, SKILL_PROGRESSIONS } from './program'

export const PROFILES: Record<UserKey, Profile> = {
  sina: {
    key: 'sina',
    name: 'Sina',
    emoji: '🔥',
    tagline: '3-day intermediate/advanced program',
    accent: '#ff6a3d',
    good: '#2dd4a8',
    headerTitle: '3-Day Calisthenics · Intermediate/Advanced',
    days: SINA_DAYS,
    info: {
      focusTag: 'Focus: Planche, Muscle-up, Dips, HSPU, Treadmill & Abs',
      skillProgressions: SKILL_PROGRESSIONS,
      importantRules: IMPORTANT_RULES,
      progressionRule: PROGRESSION_RULE,
      closingQuote: CLOSING_QUOTE,
    },
  },
  pepe: {
    key: 'pepe',
    name: 'PePe',
    emoji: '🌸',
    tagline: 'Foundation strength program',
    accent: '#ec4899',
    good: '#ff5da2',
    headerTitle: "PePe's Training Plan · Foundation Phase",
    days: PEPE_DAYS,
    info: {
      focusTag: 'Focus: Machines → Bodyweight Control → Assisted → Full Bodyweight',
      skillProgressions: PEPE_SKILL_PROGRESSIONS,
      importantRules: PEPE_IMPORTANT_RULES,
      progressionRule: PEPE_PROGRESSION_RULE,
      closingQuote: PEPE_CLOSING_QUOTE,
    },
  },
}
