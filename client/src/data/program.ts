import type { DayProgram } from '../types'

export const DAYS: DayProgram[] = [
  {
    key: 'sat',
    short: 'Sat',
    label: 'Saturday',
    emoji: '🔥',
    title: 'Push + Planche',
    accent: '#ff6a3d',
    duration: '~50–60 min',
    sections: [
      {
        name: 'Skill — First While Fresh',
        rows: [
          { ex: 'Planche Lean', val: '3 × 15–25 sec' },
          { ex: 'Tuck Planche', val: '3 × 8–12 sec' },
        ],
      },
      {
        name: 'Strength',
        rows: [
          { ex: 'Handstand Push-up', val: '3 × 4–8' },
          { ex: 'Dips', val: '3 × 6–12' },
          { ex: 'Pseudo Planche Push-up', val: '3 × 6–10' },
          { ex: 'Push-up', val: '2 × 10–15' },
        ],
      },
    ],
  },
  {
    key: 'sun',
    short: 'Sun',
    label: 'Sunday',
    emoji: '🚶',
    title: 'Treadmill + Abs',
    accent: '#2dd4bf',
    sections: [
      {
        name: 'Treadmill',
        rows: [{ ex: 'Treadmill Walking', val: '30–45 min' }],
        notes: ['Moderate pace.', 'Around 5–10% incline if comfortable.'],
      },
      {
        name: 'Abs',
        rows: [
          { ex: 'Leg Raise', val: '3 × 10–15' },
          { ex: 'Crunch', val: '3 × 15–20' },
          { ex: 'Plank', val: '3 × 30–60 sec' },
        ],
      },
    ],
  },
  {
    key: 'mon',
    short: 'Mon',
    label: 'Monday',
    emoji: '🔥',
    title: 'Pull + Muscle-up',
    accent: '#3b82f6',
    duration: '~45–55 min',
    sections: [
      {
        name: 'Muscle-up Skill — First',
        rows: [
          { ex: 'Explosive Pull-up', val: '3 × 3–5' },
          { ex: 'High Pull-up', val: '3 × 3–5' },
          { ex: 'Muscle-up Progression', val: '3 × 2–4' },
        ],
      },
      {
        name: 'Strength',
        rows: [
          { ex: 'Pull-up', val: '3 × 5–10' },
          { ex: 'Chin-up', val: '2 × 6–10' },
          { ex: 'Australian Row', val: '3 × 10–15' },
          { ex: 'Dead Hang', val: '2 × 30–45 sec' },
        ],
      },
    ],
  },
  {
    key: 'tue',
    short: 'Tue',
    label: 'Tuesday',
    emoji: '🚶',
    title: 'Treadmill',
    accent: '#2dd4bf',
    sections: [
      {
        name: 'Treadmill',
        rows: [{ ex: 'Treadmill Walking', val: '30–45 min' }],
        notes: ['Keep the intensity easy-to-moderate. You should still be able to talk while walking.'],
      },
    ],
  },
  {
    key: 'wed',
    short: 'Wed',
    label: 'Wednesday',
    emoji: '🔥',
    title: 'Full Body + Core',
    accent: '#8b5cf6',
    sections: [
      {
        name: 'Strength',
        rows: [
          { ex: 'Bulgarian Split Squat', val: '3 × 8–12 / leg' },
          { ex: 'Pistol Squat Progression', val: '2 × 5–8' },
          { ex: 'Dips', val: '2 × 8–12' },
          { ex: 'Pull-up', val: '2 × 5–10' },
          { ex: 'L-Sit', val: '3 × 15–30 sec' },
          { ex: 'Hanging Leg Raise', val: '3 × 8–15' },
          { ex: 'Hollow Body Hold', val: '2 × 20–40 sec' },
        ],
      },
      {
        name: 'Handstand',
        rows: [{ ex: 'Handstand Practice', val: '5–10 min' }],
        notes: ['Since you already have a freestanding handstand and can do wall HSPU, this is skill practice rather than beginner training.'],
      },
    ],
  },
  {
    key: 'thu',
    short: 'Thu',
    label: 'Thursday',
    emoji: '🚶',
    title: 'Treadmill + Abs',
    accent: '#2dd4bf',
    sections: [
      {
        name: 'Treadmill',
        rows: [{ ex: 'Treadmill Walking', val: '30–45 min' }],
      },
      {
        name: 'Abs',
        rows: [
          { ex: 'Hanging Knee / Leg Raise', val: '3 × 10–15' },
          { ex: 'Reverse Crunch', val: '3 × 12–20' },
          { ex: 'Side Plank', val: '2 × 30–45 sec / side' },
        ],
      },
    ],
  },
  {
    key: 'fri',
    short: 'Fri',
    label: 'Friday',
    emoji: '💤',
    title: 'Rest',
    accent: '#64748b',
    rest: {
      optional: ['Easy walking', 'Very light mobility', 'Light stretching'],
      warning: 'No heavy strength training or failure work.',
    },
  },
]

export const SKILL_PROGRESSIONS = [
  { name: 'Planche', steps: ['Planche Lean', 'Tuck Planche', 'Advanced Tuck', 'Straddle', 'Full Planche'] },
  { name: 'Muscle-up', steps: ['Explosive Pull-up', 'Chest-to-bar', 'High Pull-up', 'Transition', 'Strict Muscle-up'] },
  { name: 'Handstand', steps: ['Freestanding Handstand', 'HSPU', 'Strict HSPU', 'Deficit HSPU'] },
]

export const IMPORTANT_RULES = [
  'Keep Planche work at the beginning of Push sessions.',
  'Keep Muscle-up skill work at the beginning of Pull sessions.',
  'Do skill work while you are fresh.',
  "Don't take every set to failure.",
  'Prioritize clean technique and controlled reps.',
  'Give your body enough recovery between hard sessions.',
]

export const PROGRESSION_RULE =
  'When you can reach the top of the rep/time range with clean form on every set, increase the difficulty instead of endlessly adding repetitions.'

export const CLOSING_QUOTE =
  'The goal is not to train as many days as possible. The goal is to make steady progress while recovering well.'
