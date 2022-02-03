import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

const BaseScreen = ({
  children,
  className,
  container = 'bg-slate-100 bg-opacity-25',
  animated,
  spacing = 'lg',
}) => {
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  const hiddenStyles = 'invisible';

  return (
    <div ref={ref} className={`flex ${container} `}>
      <Animated
        className={`container mx-auto flex flex-col justify-center
          px-16 ${spacing === 'lg' ? 'py-32' : spacing === 'md' ? 'py-16' : null}
          ${className ?? ''} ${animated && !inView ? hiddenStyles : 'visible'}`}
      >
        {children}
      </Animated>
    </div>
  );
};

export default BaseScreen;

const Animated = styled.div`
  transition: 0.4s;
  animation-duration: 0.4s;
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
