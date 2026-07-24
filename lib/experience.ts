/** Career start: Backend Developer at Hospital Nuestra Señora de la Paz. */
const CAREER_START = { year: 2019, month: 8 }

/** Completed years of experience since August 2019, e.g. 6 during 2026. */
export function yearsOfExperience(now = new Date()): number {
  let years = now.getFullYear() - CAREER_START.year
  if (now.getMonth() + 1 < CAREER_START.month) years -= 1
  return years
}

/** Replaces the {years} placeholder in localized copy. */
export function withYears(text: string): string {
  return text.replace('{years}', String(yearsOfExperience()))
}
