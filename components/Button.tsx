
import React from "react";

type Variant = "primary" | "secondary" | "subtle";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  asChild?: boolean;
};

export default function Button({ variant = "primary", className = "", ...props }: Props) {
  const base = "btn focus-visible:outline-none";
  const map = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    subtle: "btn-subtle",
  } as const;
  return <button className={`${base} ${map[variant]} ${className}`} {...props} />;
}
