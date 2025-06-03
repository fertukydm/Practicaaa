import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Bienvenida.css";
 
const Welcome = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const navigate = useNavigate();
 
  const handleAccept = () => {
    setShowWelcome(false);
    navigate("/");
  };
 
  if (!showWelcome) return null;
 
  return (
    <div className={`welcome-container ${isHovering ? "flicker" : ""}`}>
      <div className="welcome-content">
        <img
          src="/tecnomarketlogo.png"
          alt="Bienvenida"
          className="welcome-image"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        />
      </div>
    </div>
  );
};
 
export default Welcome;
