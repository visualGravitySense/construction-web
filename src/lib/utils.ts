import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Путь к файлам из public (корректно для GitHub Pages base и dev) */
export function getPublicUrl(path: string): string {
  const base = import.meta.env.BASE_URL
  const normalized = base.endsWith('/') ? base : `${base}/`
  return `${normalized}${path.replace(/^\//, '')}`
}

