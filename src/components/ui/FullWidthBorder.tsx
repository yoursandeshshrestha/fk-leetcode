import IntersectionDot from './IntersectionDot';

interface FullWidthBorderProps {
  className?: string;
  verticalAlign?: 'top' | 'bottom';
}

export default function FullWidthBorder({
  className = '',
  verticalAlign = 'top'
}: FullWidthBorderProps) {
  return (
    <div className={`relative w-full border-t border-border ${className}`}>
      <div className="relative w-full max-w-[1280px] mx-auto">
        <IntersectionDot position="left" verticalAlign={verticalAlign} />
        <IntersectionDot position="right" verticalAlign={verticalAlign} />
      </div>
    </div>
  );
}
