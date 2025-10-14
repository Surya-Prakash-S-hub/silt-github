import React, { useEffect, useRef } from "react";

const ShootingStarCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // ✅ Resize canvas to fill width and fixed height
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = 700;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // 🧠 Draw subtle tech grid background
    const drawTechPattern = () => {
      ctx.strokeStyle = "rgba(110, 110, 110, 0.18)";
      ctx.lineWidth = 1;

      for (let y = 0; y < canvas.height; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      for (let x = 0; x < canvas.width; x += 60) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
    };

    // // 🌠 Shooting star generator
    // const createStar = () => {
    //   const startX = Math.random() < 0.5 ? -50 : canvas.width + 50;
    //   const startY = Math.random() * canvas.height * 0.7;
    //   const endX = canvas.width / 2 + (Math.random() - 0.5) * canvas.width;
    //   const endY = Math.random() * canvas.height;
    //   const speed = 4 + Math.random() * 3;

    //   const angle = Math.atan2(endY - startY, endX - startX);

    //   return {
    //     x: startX,
    //     y: startY,
    //     vx: Math.cos(angle) * speed,
    //     vy: Math.sin(angle) * speed,
    //     tail: [],
    //     maxTail: 20,
    //   };
    // };

    // let star = createStar();

    // const drawStar = (s) => {
    //   // tail
    //   for (let i = 0; i < s.tail.length; i++) {
    //     const t = s.tail[i];
    //     ctx.beginPath();
    //     ctx.arc(t.x, t.y, 2, 0, Math.PI * 2);
    //     ctx.fillStyle = `rgba(0, 255, 255, ${i / s.tail.length})`;
    //     ctx.fill();
    //   }

    //   // head
    //   ctx.beginPath();
    //   ctx.arc(s.x, s.y, 4, 0, Math.PI * 2);
    //   ctx.fillStyle = "#00ffff";
    //   ctx.shadowColor = "#00ffff";
    //   ctx.shadowBlur = 10;
    //   ctx.fill();
    //   ctx.shadowBlur = 0;
    // };

    // const updateStar = (s) => {
    //   s.tail.push({ x: s.x, y: s.y });
    //   if (s.tail.length > s.maxTail) s.tail.shift();

    //   s.x += s.vx;
    //   s.y += s.vy;

    //   if (
    //     s.x < -100 ||
    //     s.x > canvas.width + 100 ||
    //     s.y < -100 ||
    //     s.y > canvas.height + 100
    //   ) {
    //     star = createStar(); // new star enters after exit
    //   }
    // };

    // 🌀 Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawTechPattern();
      requestAnimationFrame(animate);
    };
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: "100%",
        height: "690px",
        display: "block",
        background: "linear-gradient(135deg, royalblue, rgb(118, 150, 246))",
      }}
    />
  );
};

export default ShootingStarCanvas;
