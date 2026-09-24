import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const sizes = {
  md: "max-w-[calc(1040px+3rem)]",
  lg: "max-w-[calc(1120px+3rem)]",
  xl: "max-w-[calc(1240px+3rem)]",
} as const;

type ContainerProps = ComponentProps<"div"> & {
  size?: keyof typeof sizes;
};

export function Container({
  size = "md",
  className,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full px-4 sm:px-6", sizes[size], className)}
      {...props}
    />
  );
}
