import Link from 'next/link';
import classes from './Logo.module.css';
import logoUrl from '../public/transparent-logo.png';
import { LanguagePicker } from './LanguagePicker';

export function Logo() {
  return (
    <div className={classes.wrapper}>
      <Link
        href="/"
        className={classes.logo}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          color: '#e0e0e0',
        }}
      >
        <img src={logoUrl.src} alt="Logo of wyzie-docs" />
        <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
          <span style={{ color: '#2563eb' }}>Wyzie</span> Docs
        </span>
      </Link>
      <div className={classes.picker}>
        <LanguagePicker />
      </div>
    </div>
  );
}
