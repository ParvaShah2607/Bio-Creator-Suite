import React from "react";

/**
 * Watermark component for bottom-right persistent branding.
 * Usage: Place inside a relatively positioned container.
 */
export const Watermark: React.FC = () => (
  <div
    style={{
      position: "absolute",
      right: 16,
      bottom: 16,
      zIndex: 1000,
      opacity: 0.6,
      fontSize: 14,
      fontWeight: 500,
      color: "#333",
      pointerEvents: "none",
      userSelect: "none",
    }}
    className="watermark"
  >
    Created by <a href="https://biodata-pro.in" target="_blank" rel="noopener noreferrer" style={{ color: '#0070f3', textDecoration: 'none' }}>biodata-pro.in</a>
  </div>
);

