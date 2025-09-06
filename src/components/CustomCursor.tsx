import { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const glow = useRef<HTMLDivElement>(null);

  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;
  let isHovering = false;
  let animationFrameId: number;

  useEffect(() => {
    // Check for touch devices and reduced motion preferences
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Hide cursor on touch devices or when reduced motion is preferred
    if (isTouchDevice || prefersReducedMotion) {
      if (dot.current) dot.current.style.display = 'none';
      if (ring.current) ring.current.style.display = 'none';
      if (glow.current) glow.current.style.display = 'none';
      return; // Exit early for touch devices
    }

    const updatePosition = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      const target = e.target as HTMLElement;

      if (
        target.closest("a") ||
        target.closest("button") ||
        target.getAttribute("role") === "button" ||
        target.classList.contains('hover-target') ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.tagName === 'SELECT'
      ) {
        isHovering = true;
      } else {
        isHovering = false;
      }
    };

    // Magnetic hover effect
    const applyMagneticEffect = () => {
      const magneticElements = document.querySelectorAll('button, a, .hover-target, [role="button"]');
      
      magneticElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const elementCenterX = rect.left + rect.width / 2;
        const elementCenterY = rect.top + rect.height / 2;
        
        // Calculate distance from cursor to element center
        const distanceX = mouseX - elementCenterX;
        const distanceY = mouseY - elementCenterY;
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
        
        // Magnetic effect radius (adjust this value to change sensitivity)
        const magneticRadius = 150;
        
        if (distance < magneticRadius) {
          // Calculate magnetic force (stronger when closer)
          const force = (magneticRadius - distance) / magneticRadius;
          const moveX = distanceX * force * 0.1; // Adjust multiplier for strength
          const moveY = distanceY * force * 0.1;
          
          // Apply transform to element
          (element as HTMLElement).style.transform = `translate(${moveX}px, ${moveY}px)`;
          (element as HTMLElement).style.transition = 'transform 0.1s ease-out';
        } else {
          // Reset transform when cursor is far
          (element as HTMLElement).style.transform = 'translate(0px, 0px)';
        }
      });
    };

    const animate = () => {
      // Smooth ring animation with easing
      ringX += (mouseX - ringX) * 0.08;
      ringY += (mouseY - ringY) * 0.08;

      // Update dot position (faster response)
      if (dot.current) {
        dot.current.style.transform = `translate(${mouseX - 2}px, ${mouseY - 2}px)`;
        dot.current.style.width = isHovering ? '8px' : '4px';
        dot.current.style.height = isHovering ? '8px' : '4px';
        dot.current.style.backgroundColor = isHovering ? 'rgba(139, 92, 246, 0.9)' : 'rgba(139, 92, 246, 0.6)';
      }

      // Update ring position and scale
      if (ring.current) {
        ring.current.style.transform = `translate(${ringX - 16}px, ${ringY - 16}px) scale(${isHovering ? 1.5 : 1})`;
        ring.current.style.borderColor = isHovering ? 'rgba(139, 92, 246, 0.6)' : 'rgba(139, 92, 246, 0.2)';
      }

      // Update glow effect
      if (glow.current) {
        glow.current.style.transform = `translate(${ringX - 30}px, ${ringY - 30}px)`;
        glow.current.style.width = isHovering ? '80px' : '60px';
        glow.current.style.height = isHovering ? '80px' : '60px';
      }

      // Apply magnetic effect
      applyMagneticEffect();

      animationFrameId = requestAnimationFrame(animate);
    };

    // Add event listeners
    document.addEventListener("mousemove", updatePosition);
    
    // Handle window resize
    const handleResize = () => {
      // Reset cursor position on resize to prevent off-screen positioning
      if (mouseX > window.innerWidth || mouseY > window.innerHeight) {
        mouseX = window.innerWidth / 2;
        mouseY = window.innerHeight / 2;
        ringX = mouseX;
        ringY = mouseY;
      }
      
      // Reset magnetic effects on resize
      const magneticElements = document.querySelectorAll('button, a, .hover-target, [role="button"]');
      magneticElements.forEach((element) => {
        (element as HTMLElement).style.transform = 'translate(0px, 0px)';
      });
    };
    window.addEventListener('resize', handleResize);

    // Start animation
    animate();

    // Cleanup function
    return () => {
      document.removeEventListener("mousemove", updatePosition);
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      
      // Reset all magnetic effects on cleanup
      const magneticElements = document.querySelectorAll('button, a, .hover-target, [role="button"]');
      magneticElements.forEach((element) => {
        (element as HTMLElement).style.transform = 'translate(0px, 0px)';
      });
    };
  }, []);

  return (
    <>
      <div
        ref={ring}
        className="custom-cursor-ring"
        aria-hidden="true"
      />
      <div
        ref={dot}
        className="custom-cursor-dot"
        aria-hidden="true"
      />
      <div
        ref={glow}
        className="custom-cursor-glow"
        aria-hidden="true"
      />
    </>
  );
};

export default CustomCursor; 