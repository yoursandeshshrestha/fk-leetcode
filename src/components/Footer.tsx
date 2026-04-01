'use client';

export default function Footer() {
  return (
    <footer className="relative w-full bg-background">
      <div className="relative w-full max-w-[1280px] mx-auto px-10 pb-16">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Links</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="#" className="text-(--text-secondary) hover:text-foreground transition-colors cursor-pointer">
                  Blind 75
                </a>
              </li>
              <li>
                <a href="#" className="text-(--text-secondary) hover:text-foreground transition-colors cursor-pointer">
                  NeetCode 150
                </a>
              </li>
              <li>
                <a href="#" className="text-(--text-secondary) hover:text-foreground transition-colors cursor-pointer">
                  NeetCode 250
                </a>
              </li>
              <li>
                <a href="#" className="text-(--text-secondary) hover:text-foreground transition-colors cursor-pointer">
                  How to use NeetCode Effectively
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Social</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="#" className="flex items-center gap-2 text-(--text-secondary) hover:text-foreground transition-colors cursor-pointer">
                  <img src="/hero/youtube.svg" alt="YouTube" className="w-5 h-5" />
                  YouTube
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 text-(--text-secondary) hover:text-foreground transition-colors cursor-pointer">
                  <img src="/hero/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 text-(--text-secondary) hover:text-foreground transition-colors cursor-pointer">
                  <img
                    src="/hero/x.svg"
                    alt="Twitter"
                    className="w-5 h-5"
                    style={{ filter: 'var(--icon-filter, none)' }}
                  />
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Contact</h3>
            <a
              href="mailto:support@neetcode.io"
              className="text-(--text-secondary) hover:text-foreground transition-colors cursor-pointer"
            >
              support@neetcode.io
            </a>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Legal</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="#" className="text-(--text-secondary) hover:text-foreground transition-colors cursor-pointer">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-(--text-secondary) hover:text-foreground transition-colors cursor-pointer">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className=" pt-8">
          <p className="text-(--text-secondary) text-sm text-center">
            Copyright © 2026 neetcode.io All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
