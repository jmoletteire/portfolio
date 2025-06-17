import { useEffect, useRef, ReactElement, cloneElement } from "react";

interface TraceIconProps {
  children: ReactElement<React.SVGProps<SVGPathElement>>;
  color?: string;
  duration?: number;
  strokeWidth?: number;
}

const TraceIcon = ({
  children,
  color = "#4fd1c5",
  duration = 2,
  strokeWidth = 2,
}: TraceIconProps) => {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    if (path) {
      const length = path.getTotalLength();
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;
      path.style.transition = "none";
      // Force reflow
      void path.getBoundingClientRect();
      // Now trigger the animation
      path.style.transition = `stroke-dashoffset ${duration}s ease`;
      path.style.strokeDashoffset = "0";
    }
  }, [color, duration]);

  return (
    <svg
      viewBox={(children.props as any).viewBox || "0 0 512 512"}
      aria-label={(children.props as any)["aria-label"] || "Traced icon"}
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      width={children.props.width || 48}
      height={children.props.height || 48}
    >
      {cloneElement(children, {
        ref: pathRef,
        fill: "none",
        stroke: color,
        strokeWidth,
      })}
    </svg>
  );
};

export default TraceIcon;
