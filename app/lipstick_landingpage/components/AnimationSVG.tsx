"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useCallback } from "react";

export default function PaintBrushMaskImage() {
  const controls = useAnimation();

  const startAnimation = useCallback(async () => {
    await controls.start({ width: 0, transition: { duration: 0 } });
    await controls.start({
      width: 800,
      x: [0, -1.5, 1.5, -1, 0],
      transition: {
        duration: 2.5,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
      },
    });
  }, [controls]);

  useEffect(() => {
    startAnimation();
  }, [startAnimation]);

  return (
    <div
      onMouseEnter={startAnimation}
      className="w-full max-w-[800px] cursor-pointer"
    >
      <svg
        viewBox="0 0 800 400"
        width="100%"
        height="auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Mask dùng chính ảnh brush (đen trên nền trắng hoặc alpha) */}
          <mask id="mask-by-image" maskUnits="userSpaceOnUse">
            <image
              href="/brush.png"
              width="800"
              height="400"
              preserveAspectRatio="xMidYMid meet"
            />
          </mask>

          {/* Gradient màu hồng (mịn và loang đẹp) */}
          <linearGradient id="pink-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff6fa180" />
            <stop offset="30%" stopColor="#ff4f8799" />
            <stop offset="60%" stopColor="#e6005ccc" />
            <stop offset="100%" stopColor="#c2004d" />
          </linearGradient>
        </defs>

        {/* Lớp màu hồng bị che bởi mask từ hình ảnh */}
        <motion.rect
          animate={controls}
          height="400"
          fill="url(#pink-gradient)"
          mask="url(#mask-by-image)"
        />
      </svg>
    </div>
  );
}
