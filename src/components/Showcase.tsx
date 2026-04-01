import RoadmapGraph from './RoadmapGraph';
import FullWidthBorder from './ui/FullWidthBorder';

export default function Showcase() {
  return (
    <section className="relative w-full">
      <div className="relative w-full max-w-[1280px] mx-auto">
        {/* Background decorative image */}
        <div className="absolute -left-6 -right-6 top-[100px] -bottom-20 -z-10">
          <img
            src="/hero.png"
            loading="lazy"
            alt=""
            className="w-full h-full object-cover opacity-50"
          />
        </div>

        {/* Main Container with Roadmap */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative aspect-video rounded-lg bg-[#0d0d14] border border-white/10 z-0">
            {/* Top Left Corner */}
            <div className="absolute -top-px -left-px -z-1">
              <div className="relative">
                {/* Corner lines */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="absolute w-2 h-px bg-[#fe5303] -left-4 top-1/2 -translate-y-1/2" />
                  <div className="absolute w-px h-2 bg-[#fe5303] left-1/2 -translate-x-1/2 -top-4" />
                </div>
                {/* Center dot */}
                <div className="w-1 h-1 rounded-full bg-[#fe5303]" />
              </div>
            </div>

            {/* Top Right Corner */}
            <div className="absolute -top-px -right-px -z-1">
              <div className="relative">
                {/* Corner lines */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="absolute w-2 h-px bg-[#fe5303] -right-4 top-1/2 -translate-y-1/2" />
                  <div className="absolute w-px h-2 bg-[#fe5303] left-1/2 -translate-x-1/2 -top-4" />
                </div>
                {/* Center dot */}
                <div className="w-1 h-1 rounded-full bg-[#fe5303]" />
              </div>
            </div>

            {/* Bottom Left Corner */}
            <div className="absolute -bottom-px -left-px -z-1">
              <div className="relative">
                {/* Corner lines */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="absolute w-2 h-px bg-[#fe5303] -left-4 top-1/2 -translate-y-1/2" />
                  <div className="absolute w-px h-2 bg-[#fe5303] left-1/2 -translate-x-1/2 -bottom-4" />
                </div>
                {/* Center dot */}
                <div className="w-1 h-1 rounded-full bg-[#fe5303]" />
              </div>
            </div>

            {/* Bottom Right Corner */}
            <div className="absolute -bottom-px -right-px -z-1">
              <div className="relative">
                {/* Corner lines */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="absolute w-2 h-px bg-[#fe5303] -right-4 top-1/2 -translate-y-1/2" />
                  <div className="absolute w-px h-2 bg-[#fe5303] left-1/2 -translate-x-1/2 -bottom-4" />
                </div>
                {/* Center dot */}
                <div className="w-1 h-1 rounded-full bg-[#fe5303]" />
              </div>
            </div>

            {/* Roadmap Graph Inside */}
            <div className="absolute inset-0 z-10">
              <RoadmapGraph />
            </div>
          </div>
        </div>
      </div>

      <FullWidthBorder className="mt-20" />
      </section>
  );
}
