import { useEffect, useRef } from "react";

const BubblesBackground = () => {
  const interactiveRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interBubble = interactiveRef.current;
    if (!interBubble) return;

    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;
    let frame: number;

    const move = () => {
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;

      interBubble.style.transform = `translate(${Math.round(
        curX
      )}px, ${Math.round(curY)}px)`;

      frame = requestAnimationFrame(move);
    };

    const mouseMove = (e: MouseEvent) => {
      tgX = e.clientX;
      tgY = e.clientY;
    };

    window.addEventListener("mousemove", mouseMove);
    move();

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="gradient-bg">
      <svg xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      <div className="gradients-container">
        <div className="g1"></div>
        <div className="g2"></div>
        <div className="g3"></div>
        <div className="g4"></div>
        <div className="g5"></div>
        <div ref={interactiveRef} className="interactive"></div>
      </div>
    </div>
  );
};

export default BubblesBackground;
