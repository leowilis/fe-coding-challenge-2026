import Link from 'next/link';

type FooterColumnProps = {
  title: string;
  links: readonly { label: string; href: string }[];
};

export default function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <nav aria-label={title}>
      <h3 className='text-xs font-semibold tracking-widest text-white uppercase'>
        {title}
      </h3>

      <ul className='mt-5 flex flex-col gap-3'>
        {links.map(({ label, href }) => (
          <li key={label}>
            <Link
              href={href}
              className='text-sm text-text-tertiary transition-colors duration-200 hover:text-white focus-visible:rounded-sm focus-visible:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white'
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
