import ca from '@/i18n/locales/ca.json';
import en from '@/i18n/locales/en.json';
import es from '@/i18n/locales/es.json';
import fr from '@/i18n/locales/fr.json';
import type { Locale } from './routing';

export const messages: Record<Locale, typeof es> = { es, en, fr, ca };

export function getMessages(locale: Locale) {
  return messages[locale];
}
