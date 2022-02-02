import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

const Screen = ({ children, className, container = 'bg-slate-100 bg-opacity-25' }) => {
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  const hiddenStyles = 'invisible';

  return (
    <div ref={ref} className={`flex ${container} `}>
      <Animated
        className={`container mx-auto flex flex-col justify-center px-16 py-32
          ${className ?? ''} ${!inView ? hiddenStyles : 'visible'}`}
      >
        {children}
      </Animated>
    </div>
  );
};

export default Screen;

const Animated = styled.div`
  transition: 0.3s;
  animation-duration: 0.3s;
  animation-name: zoomIn;

  @keyframes zoomIn {
    0% {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
    }

    50% {
      opacity: 1;
    }
  }
`;
