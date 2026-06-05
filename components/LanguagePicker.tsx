import React, { useState, useRef } from 'react';
import { useLocale, SUPPORTED_LOCALES, LOCALE_LABELS } from './LocaleContext';

export function LanguagePicker() {
  const { locale, setLocale, t } = useLocale();
  const [open, setOpen] = useState(false);

  return (
    <label
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        fontSize: '12px',
        color: 'var(--colors-text, #c0c0c0)',
        cursor: 'pointer',
        opacity: 0.85,
      }}
    >
      {/* Globe icon */}
      <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
      <span className="sr-only">{t('nav.language')}</span>
      <select
        value={locale}
        aria-label={t('nav.language')}
        onChange={(e) => {
          setLocale(e.target.value);
          setOpen(false);
        }}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        style={{
          appearance: 'none',
          background: 'transparent',
          border: 'none',
          fontSize: '12px',
          color: 'inherit',
          cursor: 'pointer',
          paddingRight: '14px',
          outline: 'none',
        }}
      >
        {SUPPORTED_LOCALES.map((code) => (
          <option
            key={code}
            value={code}
            style={{ background: '#141414', color: '#c0c0c0' }}
          >
            {LOCALE_LABELS[code]}
          </option>
        ))}
      </select>
      {/* Chevron */}
      <svg
        width="9"
        height="9"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        style={{
          pointerEvents: 'none',
          marginLeft: '-12px',
          transform: open ? 'rotate(180deg)' : 'none',
          transition: 'transform 0.2s ease',
        }}
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </label>
  );
}
