const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign'] as const;
const STORAGE_KEY = 'ibs_utm';

export function captureUtm(): Record<string, string> {
  if (typeof window === 'undefined') return {};

  const stored = sessionStorage.getItem(STORAGE_KEY);
  if (stored) return JSON.parse(stored);

  const params = new URLSearchParams(window.location.search);
  const utm: Record<string, string> = {};

  for (const key of UTM_KEYS) {
    const val = params.get(key);
    if (val) utm[key] = val;
  }

  if (Object.keys(utm).length > 0) {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(utm));
  }

  return utm;
}

export function getUtm(): Record<string, string> {
  if (typeof window === 'undefined') return {};
  const stored = sessionStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : {};
}
