interface IntersectionDotProps {
  position: 'left' | 'right';
  verticalAlign?: 'top' | 'bottom';
}

export default function IntersectionDot({
  position,
  verticalAlign = 'bottom'
}: IntersectionDotProps) {
  const horizontalClasses = position === 'left'
    ? '-left-6 -translate-x-1/2'
    : '-right-6 translate-x-1/2';

  const verticalClasses = verticalAlign === 'top'
    ? 'top-0 -translate-y-1/2'
    : 'bottom-0 translate-y-1/2';

  return (
    <div className={`absolute ${horizontalClasses} ${verticalClasses} z-50`}>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
        <div className="absolute w-2 h-px bg-[#fe5303] -left-4 top-1/2 -translate-y-1/2 z-50" />
        <div className="absolute w-2 h-px bg-[#fe5303] -right-4 top-1/2 -translate-y-1/2 z-50" />
        <div className="absolute w-px h-2 bg-[#fe5303] left-1/2 -translate-x-1/2 -top-4 z-50" />
        <div className="absolute w-px h-2 bg-[#fe5303] left-1/2 -translate-x-1/2 -bottom-4 z-50" />
      </div>
      <div className="w-1 h-1 rounded-full bg-[#fe5303] relative z-50" />
    </div>
  );
}
