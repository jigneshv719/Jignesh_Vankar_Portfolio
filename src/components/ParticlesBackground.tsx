import { useCallback, useState, useEffect } from "react";
import { loadSlim } from "@tsparticles/slim";
import { Engine } from "@tsparticles/engine";
import { Particles, initParticlesEngine } from "@tsparticles/react";

const ParticlesBackground = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Ensure we're on the client side
  useEffect(() => {
    setIsClient(true);
    console.log("ParticlesBackground component mounted");
  }, []);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      console.log("Initializing particles...");
      await loadSlim(engine);
    })
      .then(() => {
        console.log("Particles engine loaded successfully");
        setIsLoaded(true);
      })
      .catch((error) => {
        console.error("Error loading particles:", error);
        setHasError(true);
      });
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    try {
      console.log("Particles container loaded successfully");
      console.log("Container:", container);
    } catch (error) {
      console.error("Error in particles loaded callback:", error);
      setHasError(true);
    }
  }, []);

  // Don't render on server side
  if (!isClient) {
    return null;
  }

  // Fallback if particles fail to load
  if (hasError) {
    console.log("Rendering fallback background");
    return (
      <div 
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 20% 80%, rgba(162, 89, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)'
        }}
      />
    );
  }

  console.log("Rendering particles component");

  return (
    <>
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={{
          autoPlay: true,
          fullScreen: {
            enable: true,
            zIndex: 0
          },
          detectRetina: true,
          fpsLimit: 120,
          interactivity: {
            detectsOn: "window",
            events: {
              onClick: {
                enable: true,
                mode: "push"
              },
              onHover: {
                enable: true,
                mode: "repulse"
              },
              resize: {
                enable: true,
                delay: 0
              }
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4
              },
              push: {
                quantity: 4
              }
            }
          },
          particles: {
            color: {
              value: "#631bff"
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "out"
              },
              random: false,
              speed: 5,
              straight: false
            },
            number: {
              density: {
                enable: true,
                width: 2500,
                height: 800
              },
              value: 80
            },
            opacity: {
              value: 0.4
            },
            shape: {
              type: "circle"
            },
            size: {
              value: 5
            },
            links: {
              color: "#a259ff",
              distance: 150,
              enable: true,
              opacity: 0.6,
              width: 1
            }
          },
          background: {
            color: "transparent"
          }
        }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          pointerEvents: "none"
        }}
      />
    </>
  );
};

export default ParticlesBackground; 