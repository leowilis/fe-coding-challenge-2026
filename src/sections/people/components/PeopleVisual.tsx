import Image from 'next/image';
import { COLLAGE, COLLAGE_PHOTOS, PHOTO_BLEED_CQW } from '../constants/people.constants';

export default function PeopleVisual() {
  return (
    <div className='mx-auto w-full max-w-[480px] md:mx-0 md:w-[300px] md:max-w-none md:flex-none lg:w-[400px] xl:w-[720px]'>
      <div
        role='img'
        aria-label={COLLAGE.label}
       className='@container relative w-full'
        style={{ aspectRatio: `${COLLAGE.width} / ${COLLAGE.height}` }}
      >
        <div
          aria-hidden='true'
          className='absolute inset-y-0 left-1/2 aspect-square h-full -translate-x-1/2 rounded-full bg-indigo-100'
        />

        {COLLAGE_PHOTOS.map(({ src, left, top, width, height }) => (
          <div
            key={src}
            aria-hidden='true'
            className='absolute overflow-hidden rounded-md'
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: `${width}%`,
              height: `${height}%`,
            }}
          >
            <div
              className='absolute'
              style={{ inset: `-${PHOTO_BLEED_CQW}cqw` }}
            >
              <Image
                src={src}
                alt=''
                fill
                className='object-contain'
                sizes='(max-width: 767px) 80px, (max-width: 1279px) 90px, 130px'
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
