interface StorageShim {
  get(key: string): string | null
  set(key: string, value: string): void
  remove(key: string): void
  keysWithPrefix(prefix: string): string[]
}

// Some in-app browsers (e.g. Telegram/WhatsApp document previews on iOS) block
// localStorage entirely and throw on access. Feature-detect once and fall back
// to an in-memory store so the app still works during the session instead of
// crashing before it ever renders.
function createStore(): StorageShim {
  try {
    const probeKey = '__probe__'
    localStorage.setItem(probeKey, '1')
    localStorage.removeItem(probeKey)
    return {
      get: (k) => localStorage.getItem(k),
      set: (k, v) => localStorage.setItem(k, v),
      remove: (k) => localStorage.removeItem(k),
      keysWithPrefix: (p) => Object.keys(localStorage).filter((k) => k.startsWith(p)),
    }
  } catch {
    const mem = new Map<string, string>()
    return {
      get: (k) => mem.get(k) ?? null,
      set: (k, v) => void mem.set(k, v),
      remove: (k) => void mem.delete(k),
      keysWithPrefix: (p) => Array.from(mem.keys()).filter((k) => k.startsWith(p)),
    }
  }
}

export const store = createStore()

export function todayStr(): string {
  return new Date().toISOString().slice(0, 10)
}
