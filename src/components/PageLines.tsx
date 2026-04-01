export default function PageLines() {
  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <div className="w-full h-full px-10">
        <div className="max-w-[1280px] h-full mx-auto relative">
          <div className="absolute inset-y-0 -left-6 w-px bg-white/8" />
          <div className="absolute inset-y-0 -right-6 w-px bg-white/8" />
        </div>
      </div>
    </div>
  );
}
