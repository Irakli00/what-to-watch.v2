import React from "react";

export default function PageWrapper({ children, className }) {
  return <div className={`animate-fadeIn`}>{children}</div>;
}
