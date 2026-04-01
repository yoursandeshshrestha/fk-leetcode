'use client';

import FullWidthBorder from './ui/FullWidthBorder';
import { DIFFICULTY_COLORS } from '@/lib/constants';
import { courseCategories } from '@/data/courses';

export default function Courses() {
  const getDifficultyColor = (difficulty: 'easy' | 'medium' | 'hard') => {
    return DIFFICULTY_COLORS[difficulty];
  };

  return (
    <section className="relative w-full pb-20">
      <div className="relative w-full max-w-[1280px] mx-auto px-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl font-bold mb-4">Courses</h2>
          <p className="text-white/60 text-lg">
            Structured learning paths from fundamentals to advanced topics.
          </p>
        </div>
      </div>

      {/* Content Grid */}
      <div className="relative w-full max-w-[1280px] mx-auto">
        <div className="relative -mx-6 border-t border-white/10">
          {courseCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="relative flex border-b border-white/10">
              {/* Left: Category Description - 30% */}
              <div className="w-[30%] p-8 flex flex-col gap-4">
                <h3 className="text-white text-2xl font-semibold">
                  {category.title}
                </h3>
                <p className="text-white/70 text-base leading-relaxed">
                  {category.description}
                </p>
              </div>

              {/* Right: Courses - 70% */}
              <div className={`w-[70%] ${category.title === 'Python' ? 'grid grid-cols-2' : 'flex'}`}>
                {category.courses.map((course, courseIndex) => {
                  const isPython = category.title === 'Python';
                  const isFirstRow = isPython && courseIndex < 2;
                  return (
                    <div
                      key={courseIndex}
                      className={`border-l p-8 flex flex-col gap-4 cursor-pointer ${
                        isPython
                          ? (isFirstRow ? 'border-b border-white/10' : 'border-white/10')
                          : 'flex-1 border-white/10'
                      }`}
                    >
                    {/* Course Image */}
                    <div className="w-full aspect-video overflow-hidden">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Course Content */}
                    <div className="flex flex-col gap-3">
                      <h3 className="text-white text-xl font-semibold">
                        {course.title}
                      </h3>
                      <p className="text-white/70 text-base leading-relaxed">
                        {course.description}
                      </p>

                      {/* Duration and Difficulty */}
                      {(course.duration || course.difficulty) && (
                        <div className="flex items-center gap-4 text-sm">
                          {course.duration && (
                            <span className="text-white/60">{course.duration}</span>
                          )}
                          {course.difficulty && (
                            <span className={getDifficultyColor(course.difficulty)}>
                              {course.difficulty}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      <FullWidthBorder />
    </section>
  );
}
