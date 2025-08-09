"use client";
import { useEffect, useState } from "react";

export default function BreathingCircle() {
  const [phase, setPhase] = useState(null); // null means not started yet
  const [size, setSize] = useState(200);
  const [color, setColor] = useState("rgba(255, 200, 150, 0.8)");

  useEffect(() => {
    if (!phase) return;

    let timer;
    if (phase === "inhale") {
      setSize(400);
      setColor("rgba(180, 220, 255, 0.8)");
      timer = setTimeout(() => setPhase("hold1"), 4000);
    } else if (phase === "hold1") {
      timer = setTimeout(() => setPhase("exhale"), 1500);
    } else if (phase === "exhale") {
      setSize(200);
      setColor("rgba(255, 180, 180, 0.8)");
      timer = setTimeout(() => setPhase("hold2"), 8000);
    } else if (phase === "hold2") {
      timer = setTimeout(() => setPhase("inhale"), 1500);
    }
    return () => clearTimeout(timer);
  }, [phase]);

  const instructions = {
    inhale: "breathe in slowly through your nose",
    hold1: "hold",
    exhale: "exhale fully through your mouth audibly",
    hold2: "hold",
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-gradient-to-b from-[#6495ED] to-[#C8A2C8] text-white select-none"
    >
      {!phase && (
        <button
          onClick={() => setPhase("inhale")}
          className="text-xl font-quicksand hover:text-indigo-200 transition"
        >
          Start Breathing
        </button>
      )}

      {phase && (
        <div
          className="relative rounded-full border-4 transition-all ease-in-out flex items-center justify-center"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            borderColor: color,
            boxShadow: `0 0 30px ${color}, inset 0 0 40px ${color}`,
            transitionDuration:
              phase === "inhale"
                ? "4000ms"
                : phase === "exhale"
                ? "8000ms"
                : "0ms",
            opacity: phase === "hold1" || phase === "hold2" ? 0.9 : 1,
          }}
        >
        </div>
      )}
      <div className="absolute md:right-12 z-30 max-w-xl text-right px-4">
          <p className="text-white text-base md:text-base font-quicksand">
            {instructions[phase]}
          </p>
        </div>
    </div>
  );
}
