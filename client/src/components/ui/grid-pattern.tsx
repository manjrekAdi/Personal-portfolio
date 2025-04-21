import { cn } from "@/lib/utils";

interface GridPatternProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  squares?: number[][];
  className?: string;
}

export function GridPattern({
  width = 100,
  height = 100,
  x = -1,
  y = -1,
  squares = [[0, 1]],
  className,
  ...props
}: GridPatternProps) {
  return (
    <div
      className={cn("absolute inset-0 -z-10", className)}
      {...props}
    >
      <svg
        className="absolute h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="grid-pattern"
            width={width}
            height={height}
            patternUnits="userSpaceOnUse"
            x={x}
            y={y}
          >
            <path d={`M.5 ${height}V.5H${width}`} fill="none" />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#grid-pattern)"
        />
        {squares.map(([x, y], index) => (
          <rect
            key={index}
            width={width / 5}
            height={height / 5}
            x={x * width}
            y={y * height}
            className="fill-white/2.5"
            stroke="none"
          />
        ))}
      </svg>
    </div>
  );
} 