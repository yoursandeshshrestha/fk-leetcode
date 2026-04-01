export default function SectionDivider() {
  return (
    <div className="relative w-full px-10">
      <div className="relative max-w-[1280px] mx-auto">
        {/* Horizontal line */}
        <div className="h-px bg-white/8" />

        {/* Left intersection */}
        <div className="absolute -left-6 top-0 -translate-x-1/2 -translate-y-1/2">
          {/* Corner lines */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="absolute w-2 h-px bg-[#fe5303] -left-4 top-1/2 -translate-y-1/2" />
            <div className="absolute w-2 h-px bg-[#fe5303] -right-4 top-1/2 -translate-y-1/2" />
            <div className="absolute w-px h-2 bg-[#fe5303] left-1/2 -translate-x-1/2 -top-4" />
            <div className="absolute w-px h-2 bg-[#fe5303] left-1/2 -translate-x-1/2 -bottom-4" />
          </div>
          {/* Center dot */}
          <div className="w-1 h-1 rounded-full bg-[#fe5303]" />
        </div>

        {/* Right intersection */}
        <div className="absolute -right-6 top-0 translate-x-1/2 -translate-y-1/2">
          {/* Corner lines */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="absolute w-2 h-px bg-[#fe5303] -left-4 top-1/2 -translate-y-1/2" />
            <div className="absolute w-2 h-px bg-[#fe5303] -right-4 top-1/2 -translate-y-1/2" />
            <div className="absolute w-px h-2 bg-[#fe5303] left-1/2 -translate-x-1/2 -top-4" />
            <div className="absolute w-px h-2 bg-[#fe5303] left-1/2 -translate-x-1/2 -bottom-4" />
          </div>
          {/* Center dot */}
          <div className="w-1 h-1 rounded-full bg-[#fe5303]" />
        </div>
      </div>
    </div>
  );
}
