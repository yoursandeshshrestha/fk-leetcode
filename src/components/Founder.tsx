'use client';

import FullWidthBorder from './ui/FullWidthBorder';
import { COMPANY_LOGOS } from '@/lib/constants';

export default function Founder() {
  return (
    <section className="relative w-full pb-20 -mt-20">
      <div className="relative w-full max-w-[1280px] mx-auto">
        {/* Container */}
        <div className="relative -mx-6">
          <div className="relative flex flex-col lg:flex-row">
            {/* Left: Story - 60% */}
            <div className="w-full lg:w-[60%] p-12 flex flex-col justify-center gap-6">
              <h2 className="text-white text-4xl font-bold">
                Hi, I'm Navi
              </h2>

              <div className="flex flex-col gap-4 text-white/70 text-base leading-relaxed">
                <p>
                  I created NeetCode in 2020 when I was unemployed and couldn't find a job.
                </p>
                <p>
                  While I was struggling myself, it was still rewarding for me to make videos.
                </p>
                <p>
                  I received so many messages from others who got jobs after studying with my videos. It felt so gratifying and kept me motivated.
                </p>
                <p>
                  About a year later I managed to get a job at Google.
                </p>
              </div>

              {/* Previously at */}
              <div className="mt-4">
                <p className="text-white/60 text-sm mb-4">Previously at</p>
                <div className="flex items-center gap-6">
                  <img
                    src={COMPANY_LOGOS.google}
                    alt="Google"
                    className="h-8 w-auto brightness-0 invert opacity-60"
                  />
                  <img
                    src={COMPANY_LOGOS.amazon}
                    alt="Amazon"
                    className="h-8 w-auto brightness-0 invert opacity-60"
                  />
                  <img
                    src={COMPANY_LOGOS.capitalOne}
                    alt="Capital One"
                    className="h-20 w-auto brightness-0 invert opacity-60"
                  />
                </div>
              </div>
            </div>

            {/* Right: Founder Image - 40% */}
            <div className="w-full lg:w-[40%] pt-12 pl-12 flex items-end">
              <div className="w-full aspect-square overflow-hidden">
                <img
                  src="/founder.png"
                  alt="Navi - Founder of NeetCode"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <FullWidthBorder />
    </section>
  );
}
