import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import "./Button.css";

function Button({ title = "See Live", className = "", onClick, href, target, rel }) {
  const reduce = useReducedMotion();

  // Container: scale animation on hover and tap
  const container = {
    rest: { scale: 1 },
    hover: {
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 220,
        damping: 22,
      },
    },
    tap: {
      scale: 0.98,
      transition: {
        type: "spring",
        stiffness: 220,
        damping: 22,
      },
    },
  };

  // Children slide up to -100%, disappear, then immediately return while hovering or tapping
  const child = {
    rest: { y: 0, opacity: 1 },
    hover: {
      y: [0, "-100%", "-100%", 0],
      opacity: [1, 0, 0, 1],
      transition: { duration: 0.8, ease: "easeInOut", times: [0, 0.3, 0.5, 1] },
    },
    tap: {
      y: [0, "-100%", "-100%", 0],
      opacity: [1, 0, 0, 1],
      transition: { duration: 0.8, ease: "easeInOut", times: [0, 0.3, 0.5, 1] },
    },
  };

  const commonProps = {
    variants: container,
    initial: "rest",
    animate: "rest",
    whileHover: "hover",
    whileTap: "tap",
    style: { willChange: "transform" },
    className: `custom-button ${className}`,
  };

  const heartIcon = (
    <span className="custom-button-icon heart-icon">
      <svg viewBox="0 0 24 24" width="1em" height="1em" className="heart-svg">
        <defs>
          <clipPath id="heartClip">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </clipPath>
        </defs>
        {/* Heart outline (border) */}
        <path 
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5"
        />
        {/* Fill that rises like water - clipped to heart shape */}
        <g clipPath="url(#heartClip)">
          <rect className="heart-fill-rect" x="0" y="24" width="24" height="24" fill="#e53935" />
        </g>
      </svg>
    </span>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={target ?? (href.startsWith("http") ? "_blank" : undefined)}
        rel={rel ?? (href.startsWith("http") ? "noreferrer noopener" : undefined)}
        {...commonProps}
      >
        <span className="custom-button-text">
          {title}
        </span>
        {heartIcon}
      </motion.a>
    );
  }

  return (
    <motion.button type="button" onClick={onClick} {...commonProps}>
      <span className="custom-button-text">
        {title}
      </span>
      {heartIcon}
    </motion.button>
  );
}

export default Button;