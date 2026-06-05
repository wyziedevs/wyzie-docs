import React from 'react';
import { Note, Important, Caution } from '@neato/guider/client';
import { useLocale } from './LocaleContext';

function parseInline(text: string): React.ReactNode[] {
  // Split on links [text](url) and **bold**
  const tokens = text.split(/(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g);
  return tokens.map((tok, i) => {
    const link = tok.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link)
      return (
        <a
          key={i}
          href={link[2]}
          style={{ color: 'var(--colors-primary, #2563eb)' }}
        >
          {link[1]}
        </a>
      );
    const bold = tok.match(/^\*\*([^*]+)\*\*$/);
    if (bold) return <strong key={i}>{bold[1]}</strong>;
    return tok;
  });
}

/** Inline translated text — renders a React fragment with parsed links/bold */
export function T({ id }: { id: string }) {
  const { t } = useLocale();
  return <>{parseInline(t(id))}</>;
}

/** Block paragraph */
export function TP({ id }: { id: string }) {
  const { t } = useLocale();
  return <p>{parseInline(t(id))}</p>;
}

/** Translated Note callout */
export function TNote({ id }: { id: string }) {
  const { t } = useLocale();
  return <Note>{parseInline(t(id))}</Note>;
}

/** Translated Important callout */
export function TImportant({ id }: { id: string }) {
  const { t } = useLocale();
  return <Important>{parseInline(t(id))}</Important>;
}

/** Translated Caution callout */
export function TCaution({ id }: { id: string }) {
  const { t } = useLocale();
  return <Caution>{parseInline(t(id))}</Caution>;
}
