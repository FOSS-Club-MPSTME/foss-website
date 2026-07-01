"use client";

import { useEffect, useRef } from "react";

export function AnimatedGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      
      const gridSize = 50;
      const offsetX = (time * 0.5) % gridSize;
      const offsetY = (time * 0.3) % gridSize;

      ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 + Math.sin(time * 0.002) * 0.05})`;
      ctx.lineWidth = 1;

      // Draw vertical lines
      for (let x = -offsetX; x < canvas.offsetWidth + gridSize; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.offsetHeight);
        ctx.stroke();
      }

      // Draw horizontal lines
      for (let y = -offsetY; y < canvas.offsetHeight + gridSize; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.offsetWidth, y);
        ctx.stroke();
      }

      // Draw animated dots at intersections
      ctx.fillStyle = `rgba(34, 179, 79, ${0.3 + Math.sin(time * 0.003) * 0.2})`;
      for (let x = -offsetX; x < canvas.offsetWidth + gridSize; x += gridSize) {
        for (let y = -offsetY; y < canvas.offsetHeight + gridSize; y += gridSize) {
          const pulse = Math.sin(time * 0.005 + x * 0.01 + y * 0.01) * 2 + 2;
          ctx.beginPath();
          ctx.arc(x, y, pulse, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      time += 1;
      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full -z-10 opacity-40"
      style={{ width: "100%", height: "100%" }}
    />
  );
}
