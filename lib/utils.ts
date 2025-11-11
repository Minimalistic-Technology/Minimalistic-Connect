export type ClassValue = string | Record<string, boolean> | undefined | null | boolean

export function cn(...classes: ClassValue[]): string {
  return classes
    .flatMap((c) => {
      if (!c) return [] as string[]
      if (typeof c === 'string') return c.split(' ')
      return Object.entries(c).filter(([, v]) => Boolean(v)).map(([k]) => k)
    })
    .join(' ')
}

export default cn
