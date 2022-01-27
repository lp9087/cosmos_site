import { useInView } from 'react-intersection-observer';

const Screen = ({ children, className, bg = 'bg-slate-100' }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.4,
  });

  const hiddenStyles = 'opacity-0 translate-y-24';

  return (
    <div ref={ref} className={`flex min-h-[80vh] ml-32 ${bg}`}>
      <div
        className={`container mx-auto flex flex-col justify-center px-16 py-32 transition-all
          ${className} ${!inView ? hiddenStyles : ''}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Screen;
