"use client";

import { useEffect, useRef } from "react";

export function Ticker() {
  const tickerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = tickerRef.current;
    const content = contentRef.current;

    if (!container || !content) return;

    // DUPLICAR O CONTEÚDO AUTOMATICAMENTE
    content.innerHTML += content.innerHTML;

    let x = 0;
    const contentWidth = content.scrollWidth / 2;

    const animate = () => {
      x -= 1; // velocidade

      // Reset quando passar a metade (loop perfeito)
      if (Math.abs(x) >= contentWidth) {
        x = 0;
      }

      content.style.transform = `translateX(${x}px)`;
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div
      ref={tickerRef}
      className="absolute bottom-0 w-full overflow-hidden whitespace-nowrap bg-primary text-slate-800 py-2 flex items-center left-0"
    >
      <div
        ref={contentRef}
        className="flex gap-2"
        style={{ willChange: "transform" }}
      >
        <span>Full Stack / </span>
        <span>Backend / </span>
        <span>Frontend / </span>
        <span>JavaScript / </span>
        <span>TypeScript / </span>
        <span>Node.js / </span>
        <span>React / </span>
        <span>React Native / </span>
        <span>Next / </span>
        <span>Express / </span>
        <span>Prisma / </span>
        <span>Zod / </span>
        <span>Tailwind / </span>
        <span>SCSS / </span>
        <span>Jest / </span>
        <span>Git / </span>
        <span>GitHub / </span>
        <span>AWS / </span>
        <span>MySQL / </span>
        <span>MongoDB / </span>
        <span>DynamoDB / </span>
        <span>SOLID / </span>
        <span>MVC / </span>
      </div>
    </div>
  );
}
