import type { DayProgram, SkillProgression } from '../types'

export const PEPE_DAYS: DayProgram[] = [
  {
    key: 'sat',
    short: 'Sat',
    label: 'Saturday',
    emoji: '💪',
    title: 'Upper Body + Calisthenics',
    accent: '#ec4899',
    duration: '~40–50 min',
    sections: [
      {
        name: 'Machines',
        rows: [
          { ex: 'Lat Pulldown', val: '3 × 10–12' },
          { ex: 'Seated Row', val: '3 × 10–12' },
          { ex: 'Machine Chest Press', val: '3 × 10–12' },
        ],
      },
      {
        name: 'Assisted & Bodyweight',
        rows: [
          { ex: 'Assisted Push-up', val: '2 × 8–12' },
          { ex: 'Assisted Dip', val: '2 × 8–10' },
          { ex: 'Dead Hang', val: '2 × 15–30 sec' },
        ],
      },
    ],
  },
  {
    key: 'sun',
    short: 'Sun',
    label: 'Sunday',
    emoji: '🚶',
    title: 'Light Walking / Cardio',
    accent: '#f472b6',
    sections: [
      {
        name: 'Cardio',
        rows: [{ ex: 'Walking / Light Cardio', val: '20–30 min' }],
        notes: ['Keep it easy — this is active recovery, not a workout.'],
      },
    ],
  },
  {
    key: 'mon',
    short: 'Mon',
    label: 'Monday',
    emoji: '🦵',
    title: 'Lower Body + Core',
    accent: '#db2777',
    duration: '~40–50 min',
    sections: [
      {
        name: 'Machines',
        rows: [
          { ex: 'Leg Press', val: '3 × 10–12' },
          { ex: 'Leg Curl', val: '3 × 10–12' },
          { ex: 'Leg Extension', val: '2 × 10–12' },
        ],
      },
      {
        name: 'Bodyweight & Core',
        rows: [
          { ex: 'Bodyweight Squat', val: '2 × 12–15' },
          { ex: 'Glute Bridge', val: '3 × 12–15' },
          { ex: 'Plank', val: '3 × 20–40 sec' },
          { ex: 'Dead Bug', val: '2 × 8–12 / side' },
        ],
      },
    ],
  },
  {
    key: 'tue',
    short: 'Tue',
    label: 'Tuesday',
    emoji: '💤',
    title: 'Rest',
    accent: '#c081a3',
    rest: {
      optional: ['Easy walking', 'Light stretching', 'Hydration & good sleep'],
      warning: 'No training today — let your body recover.',
    },
  },
  {
    key: 'wed',
    short: 'Wed',
    label: 'Wednesday',
    emoji: '⭐',
    title: 'Full Body + Calisthenics',
    accent: '#d946ef',
    duration: '~45–55 min',
    sections: [
      {
        name: 'Pull & Push',
        rows: [
          { ex: 'Assisted Pull-up', val: '3 × 5–8' },
          { ex: 'Scapular Pull-up', val: '2 × 8–10' },
          { ex: 'Incline Push-up', val: '3 × 8–12' },
          { ex: 'Assisted Dip', val: '2 × 8–10' },
        ],
      },
      {
        name: 'Legs & Core',
        rows: [
          { ex: 'Bodyweight Squat', val: '3 × 12–15' },
          { ex: 'Dumbbell Romanian Deadlift', val: '2 × 10–12' },
          { ex: 'Hanging Knee Raise', val: '2 × 8–12' },
        ],
      },
    ],
  },
  {
    key: 'thu',
    short: 'Thu',
    label: 'Thursday',
    emoji: '🚶',
    title: 'Light Walking / Cardio',
    accent: '#f9a8d4',
    sections: [
      {
        name: 'Cardio',
        rows: [{ ex: 'Walking / Light Cardio', val: '20–30 min' }],
        notes: ['Keep it easy — this is active recovery, not a workout.'],
      },
    ],
  },
  {
    key: 'fri',
    short: 'Fri',
    label: 'Friday',
    emoji: '💤',
    title: 'Rest',
    accent: '#c081a3',
    rest: {
      optional: ['Easy walking', 'Light stretching', 'Hydration & good sleep'],
      warning: 'No training today — let your body recover.',
    },
  },
]

export const PEPE_SKILL_PROGRESSIONS: SkillProgression[] = [
  { name: 'Pull-up', steps: ['Assisted Pull-up', 'Negative Pull-up', 'Full Pull-up'] },
  { name: 'Push-up', steps: ['Incline Push-up', 'Assisted Push-up', 'Full Push-up'] },
  { name: 'Dip', steps: ['Assisted Dip', 'Dip Progression', 'Full Dip'] },
  { name: 'Core', steps: ['Plank', 'Hollow Hold', 'L-sit Progression'] },
]

export const PEPE_IMPORTANT_RULES = [
  'Progression path: Machines → controlling your own bodyweight → Assisted movements → full Bodyweight movements.',
  "Don't take every set to failure.",
  'Focus on clean, controlled technique over speed or reps.',
  'Give your body enough recovery between sessions — consistency beats intensity right now.',
]

export const PEPE_PROGRESSION_RULE =
  "After about 4–6 weeks, once these movements feel comfortable, it'll be time to move on to Negative Pull-ups, full Push-ups, Dip progressions, and L-sit progressions."

export const PEPE_CLOSING_QUOTE =
  'فعلاً هدف این نیست که PePe حرکت‌های خفن Calisthenics بزنه 😄 هدف اینه که قدم‌به‌قدم و با کنترل، قوی‌تر بشه.'
