import React from "react";

export default function PageWrapper({ children, className }) {
  return <main className={`animate-fadeIn`}>{children}</main>;
}
