import { useEffect, useRef } from 'react';

const MouseGlow = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${e.clientX - 150}px, ${e.clientY - 150}px)`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed z-0"
      style={{
        width: 300,
        height: 300,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(36, 111, 180, 0.18) 0%, transparent 70%)',
        filter: 'blur(40px)',
        transition: 'transform 0.18s cubic-bezier(.4,2,.6,1)',
        left: 0,
        top: 0,
        mixBlendMode: 'lighten',
      }}
    />
  );
};

export default MouseGlow; 