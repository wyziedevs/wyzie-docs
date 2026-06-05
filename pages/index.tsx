import {
  Button,
  Card,
  CardGrid,
  GuiderLayout,
  Hero,
  Frame,
} from '@neato/guider/client';
import logoUrl from '../public/transparent-logo.png';
import { useLocale } from '../components/LocaleContext';

export default function LandingPage() {
  const { t } = useLocale();
  return (
    <GuiderLayout meta={{ layout: 'page' }}>
      <Hero>
        <Hero.Title>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <img
              style={{ height: '3rem' }}
              src={logoUrl.src}
              alt="Logo of wyzie-docs"
            />
            <span style={{ fontSize: '3rem', fontWeight: 'bold' }}>
              <span style={{ color: '#2563eb' }}>Wyzie</span> Docs
            </span>
          </div>
        </Hero.Title>
        <Hero.Subtitle>{t('index.subtitle')}</Hero.Subtitle>
        <Hero.Actions>
          <Button to="/subs/intro">{t('index.cta.start')}</Button>
          <Button to="https://wyzie.io" type="secondary">
            {t('index.cta.store')}
          </Button>
        </Hero.Actions>
      </Hero>
      <Frame plain={true}>
        <CardGrid>
          <Card icon="mdi:key" title={t('index.card.keys.title')}>
            {t('index.card.keys.body')}
          </Card>
          <Card icon="mdi:robot-happy" title={t('index.card.ai.title')}>
            {t('index.card.ai.body')}
          </Card>
          <Card icon="mdi:arm-flex" title={t('index.card.reliable.title')}>
            {t('index.card.reliable.body')}
          </Card>
          <Card icon="mdi:beach" title={t('index.card.simple.title')}>
            {t('index.card.simple.body')}
          </Card>
        </CardGrid>
      </Frame>
    </GuiderLayout>
  );
}
