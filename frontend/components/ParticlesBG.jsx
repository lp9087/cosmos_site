import Particles from 'react-tsparticles';

const ParticlesBG = ({ className = '' }) => {
  return (
    <Particles
      id="particles-bg"
      className={`absolute h-full w-full -z-[1] ${className}`}
      options={{
        background: {
          color: {
            value: '#005ca9',
          },
          position: '50% 50%',
          repeat: 'no-repeat',
          size: 'cover',
        },
        fpsLimit: 70,
        fullScreen: {
          enable: false,
        },
        interactivity: {
          detectsOn: 'canvas',
          events: {
            onClick: {
              enable: true,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'bubble',
            },
          },
          modes: {
            grab: {
              distance: 400,
              links: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 350,
              duration: 2,
              opacity: 1,
              size: 4,
              speed: 3,
            },
          },
        },
        particles: {
          color: {
            value: '#ffffff',
          },
          links: {
            enable: true,
            color: '#ffffff',
            distance: 150,
            opacity: 0.2,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1.5,
            outModes: 'out',
          },
          number: {
            density: {
              enable: true,
            },
            value: 80,
            max: 200,
          },
          opacity: {
            value: 0.5,
            animation: {
              enable: false,
              // speed: 1,
              // minimumValue: 0.1,
            },
          },
          shape: {
            type: 'circle',
            stroke: {
              width: 0,
              color: '#000000',
            },
            polygon: {
              quantity: 5,
            },
          },
          size: {
            value: 5,
            random: true,
            animation: {
              enable: false,
              // speed: 3,
              // minimumValue: 0.1,
            },
          },
        },
      }}
    />
  );
};

export default ParticlesBG;
