import RoadmapGraph from './RoadmapGraph';

export default function Showcase() {
  const topics = [
    { id: '1', label: 'Arrays & Hashing', level: 0 },
    { id: '2', label: 'Two Pointers', level: 1 },
    { id: '3', label: 'Stack', level: 1 },
    { id: '4', label: 'Linked List', level: 2 },
    { id: '5', label: 'Sliding Window', level: 2 },
    { id: '6', label: 'Binary Search', level: 2 },
    { id: '7', label: 'Trees', level: 3 },
    { id: '8', label: 'Tries', level: 4 },
    { id: '9', label: 'Heap / Priority Queue', level: 4 },
    { id: '10', label: 'Backtracking', level: 4 },
  ];

  return (
    <section className="w-full px-4 md:px-6 pb-4 font-sans hidden md:block bg-[#d4d0c8]">
      {/* Win2000 Window containing the Roadmap */}
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
          <span className="text-white text-[10px]">&#9654;</span>
          <span className="font-bold text-[11px] flex-1">NeetCode Roadmap Explorer - [Roadmap View]</span>
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

        {/* Menu bar for the window */}
        <div className="win-menubar px-1">
          {['File', 'View', 'Help'].map(m => (
            <button key={m} className="win-menuitem text-[11px]">
              <span className="underline">{m[0]}</span>{m.slice(1)}
            </button>
          ))}
        </div>

        {/* Main content: sidebar + roadmap */}
        <div className="flex" style={{ height: '420px' }}>
          {/* Left sidebar - tree-style navigation */}
          <div
            className="w-[200px] shrink-0 bg-white overflow-y-auto"
            style={{
              borderRight: '1px solid #808080',
              borderStyle: 'solid', borderWidth: '1px',
              borderTopColor: '#808080', borderLeftColor: '#808080',
              borderRightColor: '#ffffff', borderBottomColor: '#ffffff',
            }}
          >
            <div className="p-1">
              <div
                className="flex items-center gap-1 px-1 py-0.5 text-[11px] font-bold text-white"
                style={{ background: '#316ac5' }}
              >
                <span>&#128193;</span>
                <span>NeetCode 150</span>
              </div>
              {topics.map((topic) => (
                <div
                  key={topic.id}
                  className="flex items-center gap-1 px-2 py-0.5 text-[11px] cursor-pointer hover:bg-[#316ac5] hover:text-white"
                  style={{ paddingLeft: `${8 + topic.level * 12}px` }}
                >
                  <span className="text-[10px]">{topic.level > 0 ? '&#9492;' : '&#128218;'}</span>
                  <span dangerouslySetInnerHTML={{ __html: topic.level > 0 ? '&#9492; ' + topic.label : '&#128218; ' + topic.label }} />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Roadmap Graph area */}
          <div className="flex-1 bg-white relative overflow-hidden">
            <RoadmapGraph />
          </div>
        </div>

        {/* Status bar */}
        <div className="win-statusbar">
          <div className="win-statusbar-panel flex-1">10 topics | 150 problems</div>
          <div className="win-statusbar-panel px-4">0 completed</div>
          <div className="win-statusbar-panel px-4">Ready</div>
        </div>
      </div>

      {/* Win2000 Section Divider */}
      <div className="mt-6 win-separator" />
    </section>
  );
}
