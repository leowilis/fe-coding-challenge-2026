import { useSyncExternalStore } from 'react';
import { ContactLocale } from '../../constants/contact.constants';

const DESKTOP_QUERY = '(min-width: 768px)';

const subscribe = (onChange: () => void) => {
  const query = window.matchMedia(DESKTOP_QUERY);
  query.addEventListener('change', onChange);
  return () => query.removeEventListener('change', onChange);
};

const getSnapshot = () => window.matchMedia(DESKTOP_QUERY).matches;
const getServerSnapshot = () => false;

/** Portuguese below the md breakpoint, English from md up. */
export function useContactLocale(): ContactLocale {
  const isDesktop = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );
  return isDesktop ? 'en' : 'pt';
}
