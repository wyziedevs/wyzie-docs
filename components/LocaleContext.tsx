import React, { createContext, useContext, useEffect, useState } from 'react';
import en from '../lib/messages/en';

export const SUPPORTED_LOCALES = [
  'en',
  'es',
  'de',
  'fr',
  'ja',
  'pt-br',
  'he',
  'ar',
  'zh-cn',
  'hi',
  'ru',
  'ro',
  'tr',
  'sr',
  'it',
  'pl',
  'ko',
  'nl',
  'uk',
  'vi',
  'id',
] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
  de: 'Deutsch',
  fr: 'Français',
  ja: '日本語',
  'pt-br': 'Português (BR)',
  he: 'עברית',
  ar: 'العربية',
  'zh-cn': '中文（简体）',
  hi: 'हिन्दी',
  ru: 'Русский',
  ro: 'Română',
  tr: 'Türkçe',
  sr: 'Srpski',
  it: 'Italiano',
  pl: 'Polski',
  ko: '한국어',
  nl: 'Nederlands',
  uk: 'Українська',
  vi: 'Tiếng Việt',
  id: 'Bahasa Indonesia',
};

export const RTL_LOCALES: Locale[] = ['he', 'ar'];
const STORAGE_KEY = 'wyzie:locale:v1';

const LOADERS: Partial<Record<Locale, () => Promise<Record<string, string>>>> =
  {
    es: () => import('../lib/messages/es').then((m) => m.default),
    de: () => import('../lib/messages/de').then((m) => m.default),
    fr: () => import('../lib/messages/fr').then((m) => m.default),
    ja: () => import('../lib/messages/ja').then((m) => m.default),
    'pt-br': () => import('../lib/messages/pt-br').then((m) => m.default),
    he: () => import('../lib/messages/he').then((m) => m.default),
    ar: () => import('../lib/messages/ar').then((m) => m.default),
    'zh-cn': () => import('../lib/messages/zh-cn').then((m) => m.default),
    hi: () => import('../lib/messages/hi').then((m) => m.default),
    ru: () => import('../lib/messages/ru').then((m) => m.default),
    ro: () => import('../lib/messages/ro').then((m) => m.default),
    tr: () => import('../lib/messages/tr').then((m) => m.default),
    sr: () => import('../lib/messages/sr').then((m) => m.default),
    it: () => import('../lib/messages/it').then((m) => m.default),
    pl: () => import('../lib/messages/pl').then((m) => m.default),
    ko: () => import('../lib/messages/ko').then((m) => m.default),
    nl: () => import('../lib/messages/nl').then((m) => m.default),
    uk: () => import('../lib/messages/uk').then((m) => m.default),
    vi: () => import('../lib/messages/vi').then((m) => m.default),
    id: () => import('../lib/messages/id').then((m) => m.default),
  };

const cache: Partial<Record<Locale, Record<string, string>>> = { en };

async function loadMessages(loc: Locale): Promise<Record<string, string>> {
  if (cache[loc]) return cache[loc]!;
  const loader = LOADERS[loc];
  if (!loader) return en;
  const msgs = await loader();
  cache[loc] = msgs;
  return msgs;
}

function resolveLocale(code: string): Locale | null {
  const lower = code.toLowerCase();
  if ((SUPPORTED_LOCALES as readonly string[]).includes(lower))
    return lower as Locale;
  const prefix = lower.split('-')[0];
  const match = SUPPORTED_LOCALES.find(
    (l) => l === prefix || l.startsWith(prefix + '-'),
  );
  return match ?? null;
}

function detectLocale(): Locale {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const r = resolveLocale(saved);
      if (r) return r;
    }
  } catch {}
  if (typeof navigator !== 'undefined' && navigator.language) {
    const r = resolveLocale(navigator.language);
    if (r) return r;
  }
  return 'en';
}

interface LocaleCtx {
  locale: Locale;
  setLocale: (loc: string) => void;
  t: (key: string, vars?: Record<string, string | number>) => string;
  isRTL: boolean;
}

const LocaleContext = createContext<LocaleCtx | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');
  const [messages, setMessages] = useState<Record<string, string>>(en);

  useEffect(() => {
    const detected = detectLocale();
    if (detected !== 'en') {
      loadMessages(detected).then((msgs) => {
        setMessages({ ...en, ...msgs });
        setLocaleState(detected);
      });
    }
    document.documentElement.lang = detected;
    document.documentElement.dir = RTL_LOCALES.includes(detected)
      ? 'rtl'
      : 'ltr';
  }, []);

  const setLocale = (loc: string) => {
    const resolved = resolveLocale(loc);
    if (!resolved) return;
    try {
      localStorage.setItem(STORAGE_KEY, resolved);
    } catch {}
    document.documentElement.lang = resolved;
    document.documentElement.dir = RTL_LOCALES.includes(resolved)
      ? 'rtl'
      : 'ltr';
    if (resolved === 'en') {
      setMessages(en);
      setLocaleState(resolved);
      return;
    }
    loadMessages(resolved).then((msgs) => {
      setMessages({ ...en, ...msgs });
      setLocaleState(resolved);
    });
  };

  const t = (key: string, vars?: Record<string, string | number>): string => {
    let str = messages[key] ?? en[key] ?? key;
    if (vars)
      for (const [k, v] of Object.entries(vars))
        str = str.split('{' + k + '}').join(String(v));
    return str;
  };

  return (
    <LocaleContext.Provider
      value={{ locale, setLocale, t, isRTL: RTL_LOCALES.includes(locale) }}
    >
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale(): LocaleCtx {
  const ctx = useContext(LocaleContext);
  if (!ctx)
    return {
      locale: 'en',
      setLocale: () => {},
      t: (k: string) => (en as Record<string, string>)[k] ?? k,
      isRTL: false,
    };
  return ctx;
}
