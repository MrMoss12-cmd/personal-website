import { FC, useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground: FC = () => {
  const particlesInit = useCallback(async (engine: any) => {
    console.log("Initializing particles engine");
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    console.log("Particles container loaded", container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        autoPlay: true,
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: "#ffffff"
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.5,
            random: false,
          },
          size: {
            value: 3,
            random: true,
          },
          links: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 2.5,  // Slightly increased speed
            direction: "none",
            random: true,  // Changed to true for more random movement
            straight: false,
            outModes: {
              default: "bounce"  // Changed from "out" to "bounce" to keep particles in view
            },
            attract: {
              enable: true,  // Enable attraction but with very low force
              rotateX: 1200,
              rotateY: 1200,
              factor: 0.2  // Low attraction factor
            }
          }
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab"
            },
            onClick: {
              enable: true,
              mode: "push"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 0.7  // Reduced from 1 to make the connection less strong
              }
            },
            push: {
              quantity: 4
            },
          }
        },
        detectRetina: true
      }}
      style={{ 
        position: "fixed", 
        top: 0,
        left: 0,
        width: "100%", 
        height: "100%", 
        zIndex: 0,
        pointerEvents: "auto" // Cambiado de "none" a "auto"
      }}
    />
  );
};

export default ParticlesBackground;