import Image from 'next/image';
import { CTA_FRAME, CTA_SHAPES, CTA_SHAPES_DIR } from '../constants/cta.constants';

// Frame height as a share of frame width, so vertical offsets scale with width.
const HEIGHT_TO_WIDTH = CTA_FRAME.height / CTA_FRAME.width;

const toCqw = (framePercent: number) => `${framePercent * HEIGHT_TO_WIDTH}cqw`;

type Shape = (typeof CTA_SHAPES)[number];

const verticalOffset = (shape: Shape) => {
  if ('top' in shape) return { top: toCqw(shape.top) };

  const sink = 'sink' in shape ? shape.sink : 0;
  return { bottom: toCqw(shape.bottom - sink) };
};

// Purely decorative background shapes, hidden from assistive tech.
// Shown from tablet (md) up only.
export default function CtaDecorations() {
  return (
    <div
      aria-hidden='true'
      className='pointer-events-none absolute inset-0 hidden @container md:block'
    >
      {CTA_SHAPES.map((shape) => (
        <span
          key={shape.id}
          className='absolute block'
          style={{
            left: `${shape.left}%`,
            width: `${shape.width}%`,
            ...verticalOffset(shape),
          }}
        >
          <Image
            src={`${CTA_SHAPES_DIR}/${shape.id}.svg`}
            alt=''
            width={100}
            height={100}
            className='h-auto w-full'
          />
        </span>
      ))}
    </div>
  );
}
