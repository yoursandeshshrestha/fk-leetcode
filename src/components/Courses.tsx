'use client';

import { DIFFICULTY_COLORS } from '@/lib/constants';
import { courseCategories } from '@/data/courses';

export default function Courses() {
  const getDifficultyColor = (difficulty: 'easy' | 'medium' | 'hard') => {
    return DIFFICULTY_COLORS[difficulty];
  };

  const getDifficultyLabel = (difficulty: 'easy' | 'medium' | 'hard') => {
    const map = { easy: '&#9679; Easy', medium: '&#9679; Medium', hard: '&#9679; Hard' };
    return map[difficulty];
  };

  const getDifficultyTextColor = (difficulty: 'easy' | 'medium' | 'hard') => {
    const map = { easy: '#008000', medium: '#cc8800', hard: '#cc0000' };
    return map[difficulty];
  };

  return (
    <section className="w-full px-4 md:px-6 pb-4 font-sans bg-[#d4d0c8]">
      {/* Win2000 Window */}
      <div
        className="w-full max-w-5xl mx-auto"
        style={{
          borderStyle: 'solid', borderWidth: '2px',
          borderTopColor: '#ffffff', borderLeftColor: '#ffffff',
          borderRightColor: '#404040', borderBottomColor: '#404040',
        }}
      >
        {/* Title Bar */}
        <div className="win-titlebar">
          <span className="text-[10px]">&#128218;</span>
          <span className="font-bold text-[11px] flex-1">Course Catalog - NeetCode Learning Suite</span>
          <div className="flex items-center gap-1">
            <button aria-label="Minimize" className="w-[16px] h-[14px] bg-[#d4d0c8] text-black text-[10px] flex items-center justify-center"
              style={{ borderStyle: 'solid', borderWidth: '2px', borderTopColor: '#ffffff', borderLeftColor: '#ffffff', borderRightColor: '#404040', borderBottomColor: '#404040' }}>
              <span className="mb-1">_</span>
            </button>
            <button aria-label="Maximize" className="w-[16px] h-[14px] bg-[#d4d0c8] text-black text-[9px] flex items-center justify-center"
              style={{ borderStyle: 'solid', borderWidth: '2px', borderTopColor: '#ffffff', borderLeftColor: '#ffffff', borderRightColor: '#404040', borderBottomColor: '#404040' }}>
              <span>&#9635;</span>
            </button>
            <button aria-label="Close" className="w-[16px] h-[14px] bg-[#d4d0c8] text-black text-[11px] flex items-center justify-center"
              style={{ borderStyle: 'solid', borderWidth: '2px', borderTopColor: '#ffffff', borderLeftColor: '#ffffff', borderRightColor: '#404040', borderBottomColor: '#404040' }}>
              <span>&#x2715;</span>
            </button>
          </div>
        </div>

        {/* Toolbar */}
        <div className="win-menubar px-1 gap-1 flex-wrap">
          {['All Courses', 'DSA', 'System Design', 'Python', 'Full Stack', 'OOD'].map(tab => (
            <button key={tab} className="win-btn text-[11px] py-0.5 px-3">
              {tab}
            </button>
          ))}
        </div>

        {/* Main content - two-panel layout */}
        <div className="flex gap-0" style={{ minHeight: '420px' }}>
          {/* Left: Category tree */}
          <div
            className="w-[180px] shrink-0 bg-white overflow-y-auto"
            style={{
              borderStyle: 'solid', borderWidth: '1px',
              borderTopColor: '#808080', borderLeftColor: '#808080',
              borderRightColor: '#ffffff', borderBottomColor: '#ffffff',
            }}
          >
            <div
              className="px-2 py-1 text-[11px] font-bold text-white"
              style={{ background: '#0a246a' }}
            >
              Categories
            </div>
            {courseCategories.map((cat, i) => (
              <div
                key={i}
                className="px-2 py-1 text-[11px] cursor-pointer border-b border-[#e8e8e8] flex items-center gap-1 hover:bg-[#316ac5] hover:text-white"
              >
                <span>&#128193;</span>
                <span className="leading-tight">{cat.title}</span>
                <span className="ml-auto text-[10px] text-[#808080]">({cat.courses.length})</span>
              </div>
            ))}
          </div>

          {/* Right: Courses grid */}
          <div className="flex-1 p-2 overflow-y-auto bg-[#d4d0c8]">
            <p className="text-[11px] mb-2 text-[#444]">
              Structured learning paths from fundamentals to advanced topics.
              Double-click a course to open it.
            </p>

            {courseCategories.map((category, catIdx) => (
              <div key={catIdx} className="mb-3">
                {/* Category header */}
                <div
                  className="px-2 py-1 text-[11px] font-bold text-white mb-1 flex items-center gap-1"
                  style={{ background: '#0058b4' }}
                >
                  <span>&#128218;</span>
                  <span>{category.title}</span>
                </div>
                <p className="text-[10px] text-[#444] mb-2 px-1">{category.description}</p>

                {/* Courses as icon grid */}
                <div className="flex flex-wrap gap-2 px-1">
                  {category.courses.map((course, courseIdx) => (
                    <div
                      key={courseIdx}
                      className="w-[180px] bg-[#d4d0c8] cursor-pointer hover:bg-[#316ac5] hover:text-white group"
                      style={{
                        borderStyle: 'solid', borderWidth: '1px',
                        borderTopColor: '#ffffff', borderLeftColor: '#ffffff',
                        borderRightColor: '#808080', borderBottomColor: '#808080',
                      }}
                    >
                      {/* Course thumbnail */}
                      <div className="w-full aspect-video overflow-hidden"
                        style={{ borderBottom: '1px solid #808080' }}>
                        <img
                          src={course.image}
                          alt={course.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-1.5">
                        <p className="text-[11px] font-bold leading-tight mb-1">{course.title}</p>
                        <p className="text-[10px] leading-tight text-[#444] group-hover:text-white mb-1">
                          {course.description}
                        </p>
                        <div className="flex items-center gap-2 text-[10px]">
                          {course.duration && (
                            <span className="text-[#808080] group-hover:text-white">
                              &#9201; {course.duration}
                            </span>
                          )}
                          {course.difficulty && (
                            <span style={{ color: getDifficultyTextColor(course.difficulty) }}
                              className="font-bold group-hover:text-white">
                              &#9679; {course.difficulty}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Status bar */}
        <div className="win-statusbar">
          <div className="win-statusbar-panel flex-1">
            {courseCategories.reduce((acc, c) => acc + c.courses.length, 0)} courses available
          </div>
          <div className="win-statusbar-panel px-4">Free &amp; Pro tiers</div>
        </div>
      </div>

      <div className="mt-4 win-separator" />
    </section>
  );
}
