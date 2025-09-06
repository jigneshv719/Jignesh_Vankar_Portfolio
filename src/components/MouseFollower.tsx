import { useEffect, useState, useRef } from 'react';

const MouseFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.classList.contains('hover-target')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  useEffect(() => {
    if (cursorRef.current) {
      cursorRef.current.style.left = `${mousePosition.x}px`;
      cursorRef.current.style.top = `${mousePosition.y}px`;
    }
    if (cursorDotRef.current) {
      cursorDotRef.current.style.left = `${mousePosition.x}px`;
      cursorDotRef.current.style.top = `${mousePosition.y}px`;
    }
  }, [mousePosition]);

  return (
    <>
      {/* Main cursor */}
      <div
        ref={cursorRef}
        className={`fixed pointer-events-none z-50 transition-all duration-300 ease-out ${
          isHovering ? 'scale-150' : 'scale-100'
        }`}
        style={{
          width: '40px',
          height: '40px',
          border: '2px solid rgba(139, 92, 246, 0.3)',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          mixBlendMode: 'difference',
        }}
      />
      
      {/* Cursor dot */}
      <div
        ref={cursorDotRef}
        className="fixed pointer-events-none z-50"
        style={{
          width: '8px',
          height: '8px',
          backgroundColor: 'rgba(139, 92, 246, 0.8)',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          transition: 'opacity 0.2s ease',
        }}
      />
    </>
  );
};

export default MouseFollower;