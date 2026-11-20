import { FOOTER } from './constants/footer.constants';

export default async function FooterCopyright() {
  'use cache';

  const year = new Date().getFullYear();

  return (
    <p className='text-center text-sm text-white md:text-left md:text-xs md:text-white/60'>
      © {year} {FOOTER.company}
    </p>
  );
}
