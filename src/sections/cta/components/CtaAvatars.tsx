import Image from 'next/image';
import { CTA_AVATAR_SIZE, CTA_AVATARS } from '../constants/cta.constants';

// Decorative stack of overlapping learner avatars.
export default function CtaAvatars() {
  return (
    <div aria-hidden='true' className='flex -space-x-2'>
      {CTA_AVATARS.map((src) => (
        <Image
          key={src}
          src={src}
          alt=''
          width={CTA_AVATAR_SIZE}
          height={CTA_AVATAR_SIZE}
          className='size-10 rounded-full object-cover ring-1 ring-yellow'
        />
      ))}
    </div>
  );
}
