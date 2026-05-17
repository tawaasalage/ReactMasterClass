import React from "react";

export default function Button({
  children,
  className = "",
  type = "button",
  variant = "primary",
  ...props
}) {
  const variantClass = {
    primary: "primary-button",
    secondary: "secondary-button",
    danger: "danger-button",
  };

  return (
    <button
      className={`${variantClass[variant]} ${className}`}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}
