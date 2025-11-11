
import React from "react";

export default function Card({ className = "", children }: React.PropsWithChildren<{ className?: string }>) {
  // center content by default so icons and text align nicely in grid sections
  return <div className={`card p-6 flex flex-col items-center text-center ${className}`}>{children}</div>;
}
