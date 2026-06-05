import '@neato/guider/style.css';
import { createGuiderApp } from '@neato/guider/client';
import { LocaleProvider } from '../components/LocaleContext';

const GuiderApp = createGuiderApp();

export default function App(props: any) {
  return (
    <LocaleProvider>
      <GuiderApp {...props} />
    </LocaleProvider>
  );
}
