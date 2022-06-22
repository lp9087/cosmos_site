import Image from 'next/image';

export const HeroBG = ({ className = '' }) => {
  return (
    <div className={`absolute -left-2 -top-2 -right-2 -z-10 ${className}`}>
      <Image
        className="object-cover object-top"
        src="/assets/hero-bg.png"
        alt="Hero backgound"
        layout="fill"
        priority
      />
    </div>
  );
};
