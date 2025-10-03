import React from "react";
import { Button } from "antd";
import { Link } from "react-router"; // si te da error, usa: react-router-dom

type Variant = "primary" | "white";

interface UIButtonProps {
  children: React.ReactNode;
  variant?: Variant;
  to?: string; 
}

const UIButton: React.FC<UIButtonProps> = ({ children, variant = "primary", to}) => {
  const btn = (
    <Button type={variant === "white" ? "default" : "primary"} size="large">
      {children}
    </Button>
  );
  return to ? <Link to={to}>{btn}</Link> : btn;
};

export default UIButton;
